import tkinter as tk
from tkinter import ttk, messagebox
import sqlite3
from datetime import datetime
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import pandas as pd

class StudyTrackerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Study Session Tracker")
        self.root.geometry("800x600")
        self.root.resizable(True, True)
        
        # Variables
        self.timer_running = False
        self.elapsed_seconds = 0
        self.current_subject = tk.StringVar()
        self.subjects = ["Math", "Language", "History", "Computer Science", "Project", "Coding", "Other"]
        
        # Database setup
        self.setup_database()
        
        # UI Setup
        self.setup_ui()
        
        # Update timer display
        self.update_timer()
    
    def setup_database(self):
        # Connect to SQLite database (creates it if it doesn't exist)
        self.conn = sqlite3.connect("study_sessions.db")
        self.cursor = self.conn.cursor()
        
        # Create table if it doesn't exist
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS sessions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                subject TEXT,
                duration INTEGER,
                start_time TIMESTAMP,
                end_time TIMESTAMP
            )
        ''')
        self.conn.commit()
    
    def setup_ui(self):
        # Main Frame
        main_frame = ttk.Frame(self.root, padding="20")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Timer Display
        timer_frame = ttk.LabelFrame(main_frame, text="Current Session", padding="10")
        timer_frame.pack(fill=tk.X, pady=10)
        
        self.timer_label = ttk.Label(timer_frame, text="00:00:00", font=("Arial", 40))
        self.timer_label.pack(pady=10)
        
        # Subject Selection
        subject_frame = ttk.Frame(timer_frame)
        subject_frame.pack(fill=tk.X, pady=10)
        
        ttk.Label(subject_frame, text="Subject:").pack(side=tk.LEFT, padx=5)
        subject_dropdown = ttk.Combobox(subject_frame, textvariable=self.current_subject, values=self.subjects)
        subject_dropdown.pack(side=tk.LEFT, padx=5, fill=tk.X, expand=True)
        subject_dropdown.current(0)
        
        # Timer Controls
        controls_frame = ttk.Frame(timer_frame)
        controls_frame.pack(fill=tk.X, pady=10)
        
        self.start_button = ttk.Button(controls_frame, text="Start", command=self.start_timer)
        self.start_button.pack(side=tk.LEFT, padx=5)
        
        self.pause_button = ttk.Button(controls_frame, text="Pause", command=self.pause_timer, state=tk.DISABLED)
        self.pause_button.pack(side=tk.LEFT, padx=5)
        
        self.stop_button = ttk.Button(controls_frame, text="Stop", command=self.stop_timer, state=tk.DISABLED)
        self.stop_button.pack(side=tk.LEFT, padx=5)
        
        # History and Statistics
        notebook = ttk.Notebook(main_frame)
        notebook.pack(fill=tk.BOTH, expand=True, pady=10)
        
        # History Tab
        history_frame = ttk.Frame(notebook, padding="10")
        notebook.add(history_frame, text="Session History")
        
        # Setup treeview for session history
        columns = ("Date", "Subject", "Duration")
        self.history_tree = ttk.Treeview(history_frame, columns=columns, show="headings")
        
        # Define headings
        for col in columns:
            self.history_tree.heading(col, text=col)
            self.history_tree.column(col, width=100)
        
        self.history_tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        # Add scrollbar
        scrollbar = ttk.Scrollbar(history_frame, orient=tk.VERTICAL, command=self.history_tree.yview)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        self.history_tree.configure(yscrollcommand=scrollbar.set)
        
        # Stats Tab
        stats_frame = ttk.Frame(notebook, padding="10")
        notebook.add(stats_frame, text="Statistics")
        
        # Setup figure for matplotlib
        self.fig = plt.Figure(figsize=(5, 4), dpi=100)
        self.canvas = FigureCanvasTkAgg(self.fig, stats_frame)
        self.canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
        # Refresh button for stats
        refresh_btn = ttk.Button(stats_frame, text="Refresh Statistics", command=self.update_statistics)
        refresh_btn.pack(pady=10)
        
        # Load initial data
        self.load_session_history()
        self.update_statistics()
    
    def format_time(self, seconds):
        """Convert seconds to HH:MM:SS format"""
        hours, remainder = divmod(seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
    
    def update_timer(self):
        """Update the timer display"""
        if self.timer_running:
            self.elapsed_seconds += 1
        
        self.timer_label.config(text=self.format_time(self.elapsed_seconds))
        self.root.after(1000, self.update_timer)
    
    def start_timer(self):
        """Start or resume the timer"""
        self.timer_running = True
        self.start_button.config(state=tk.DISABLED)
        self.pause_button.config(state=tk.NORMAL)
        self.stop_button.config(state=tk.NORMAL)
        
        # Record start time if this is a new session
        if self.elapsed_seconds == 0:
            self.start_time = datetime.now()
    
    def pause_timer(self):
        """Pause the timer"""
        self.timer_running = False
        self.start_button.config(state=tk.NORMAL)
        self.pause_button.config(state=tk.DISABLED)
    
    def stop_timer(self):
        """Stop the timer and save the session"""
        self.timer_running = False
        
        # Only save if there was some elapsed time
        if self.elapsed_seconds > 0:
            end_time = datetime.now()
            
            # Save session to database
            self.cursor.execute(
                "INSERT INTO sessions (subject, duration, start_time, end_time) VALUES (?, ?, ?, ?)",
                (self.current_subject.get(), self.elapsed_seconds, self.start_time, end_time)
            )
            self.conn.commit()
            
            # Show confirmation
            messagebox.showinfo("Session Saved", 
                               f"Study session saved!\nSubject: {self.current_subject.get()}\nDuration: {self.format_time(self.elapsed_seconds)}")
            
            # Reset timer
            self.elapsed_seconds = 0
            
            # Refresh history and stats
            self.load_session_history()
            self.update_statistics()
        
        # Reset buttons
        self.start_button.config(state=tk.NORMAL)
        self.pause_button.config(state=tk.DISABLED)
        self.stop_button.config(state=tk.DISABLED)
    
    def load_session_history(self):
        """Load and display session history"""
        # Clear existing items
        for item in self.history_tree.get_children():
            self.history_tree.delete(item)
        
        # Fetch data from database
        self.cursor.execute("SELECT start_time, subject, duration FROM sessions ORDER BY start_time DESC LIMIT 100")
        sessions = self.cursor.fetchall()
        
        # Insert into treeview
        for session in sessions:
            start_time = datetime.fromisoformat(session[0])
            formatted_date = start_time.strftime("%Y-%m-%d %H:%M")
            formatted_duration = self.format_time(session[2])
            self.history_tree.insert("", tk.END, values=(formatted_date, session[1], formatted_duration))
    
    def update_statistics(self):
        """Update statistics visualizations"""
        # Clear the figure
        self.fig.clear()
        
        # Fetch all sessions
        self.cursor.execute("SELECT subject, duration, start_time FROM sessions")
        sessions = self.cursor.fetchall()
        
        if not sessions:
            # No data to show
            ax = self.fig.add_subplot(111)
            ax.text(0.5, 0.5, "No study data available yet", ha='center', va='center')
            self.canvas.draw()
            return
        
        # Convert to DataFrame for easier analysis
        data = pd.DataFrame(sessions, columns=['subject', 'duration', 'date'])
        data['duration_hours'] = data['duration'] / 3600
        data['date'] = pd.to_datetime(data['date'])
        
        # Create two subplots
        ax1 = self.fig.add_subplot(121)
        ax2 = self.fig.add_subplot(122)
        
        # Plot 1: Time per subject (pie chart)
        subject_totals = data.groupby('subject')['duration_hours'].sum()
        ax1.pie(subject_totals, labels=subject_totals.index, autopct='%1.1f%%')
        ax1.set_title('Study Time by Subject')
        
        # Plot 2: Study time over time (line chart)
        # Group by day
        data['day'] = data['date'].dt.date
        daily_totals = data.groupby('day')['duration_hours'].sum()
        
        # Only show last 14 days for clarity
        daily_totals = daily_totals.tail(14)
        
        ax2.plot(daily_totals.index, daily_totals.values, 'o-')
        ax2.set_title('Daily Study Hours')
        ax2.set_ylabel('Hours')
        ax2.tick_params(axis='x', rotation=45)
        
        # Adjust layout
        self.fig.tight_layout()
        self.canvas.draw()
    
    def on_closing(self):
        """Clean up when app is closed"""
        if self.timer_running:
            if messagebox.askyesno("Quit", "You have an active study session. Save before quitting?"):
                self.stop_timer()
        
        self.conn.close()
        self.root.destroy()

if __name__ == "__main__":
    root = tk.Tk()
    app = StudyTrackerApp(root)
    root.protocol("WM_DELETE_WINDOW", app.on_closing)
    root.mainloop()