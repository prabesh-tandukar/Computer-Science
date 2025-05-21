import time
import json
import os
from datetime import datetime


session_data = {
    'subject' : '',
    'start_time' : '',
    'end_time' : '',
    'date' : '',
    'duration' : '',
    'total_seconds' : ''
}

current_time = datetime.now()
print(current_time)
# print(type(current_time))

# date = current_time.strftime('%d-%m-%Y')
# print(date)

# start_time = current_time.strftime('%H:%M:%S')
# print(start_time)

def start_session(subject):
    subject_name = subject
    current_time = datetime.now()
    start_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
    
    date = current_time.strftime('%d-%m-%Y')

    session_data['subject'] = subject_name
    session_data['start_time'] = start_time
    session_data['date'] = date

start_session('math')

# print(session_data)

def end_session():
    current_time = datetime.now()
    end_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
    session_data['end_time'] = end_time
    

end_session()
# print(session_data)

def duration():
    start = session_data['start_time']
    end = session_data['end_time']
    starting = datetime.strptime(start, "%Y-%m-%d %H:%M:%S")
    ending = datetime.strptime(end, "%Y-%m-%d %H:%M:%S")
    duration = ending - starting
    session_data['total_seconds'] = duration.total_seconds()
    session_data['duration'] =str(duration)
    

duration()
print(session_data)