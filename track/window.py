import tkinter as tk
import time
import json
import os
import csv
from datetime import datetime


session_data = {
    'subject' : '',
    'start_time' : '',
    'end_time' : '',
    'date' : '',
    'duration' : '',
    'total_seconds' : ''
}

def start_session(subject):
    subject_name = subject
    current_time = datetime.now()
    start_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
    
    date = current_time.strftime('%d-%m-%Y')

    session_data['subject'] = subject_name
    session_data['start_time'] = start_time
    session_data['date'] = date
    
    data_label.config(text=start_time + subject)

def end_session():
    current_time = datetime.now()
    end_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
    session_data['end_time'] = end_time
    end_label.config(text=end_time)
    duration()
    write_to_csv(session_data)

def duration():
    start = session_data['start_time']
    end = session_data['end_time']
    starting = datetime.strptime(start, "%Y-%m-%d %H:%M:%S")
    ending = datetime.strptime(end, "%Y-%m-%d %H:%M:%S")
    duration = ending - starting
    session_data['total_seconds'] = duration.total_seconds()
    session_data['duration'] =str(duration)
    
    
def write_to_csv(data):
    #if files exists
    file_exists = os.path.isfile('time.csv')


    with open('time.csv', 'a', newline="") as csvfile:
        fieldnames = ['subject', 'start_time', 'end_time', 'date', 'duration', 'total_seconds']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        if not file_exists:
            writer.writeheader()
            
        writer.writerow(data)



root = tk.Tk() 
root.title("Study Timer")
root.geometry('300x200')

subject = tk.Label(root, text="Working on ?")
e1 = tk.Entry(root)

data_label = tk.Label(root, text="Example")
data_label.pack()

end_label = tk.Label(root, text="")
end_label.pack()

start_button = tk.Button(root, text= 'Start Session', width=25, command= lambda: start_session(e1.get()))
end_button = tk.Button(root, text= 'End Session', width=25, command= lambda: end_session())


subject.pack()
e1.pack()
start_button.pack()
end_button.pack()

root.mainloop()
