#this is our secret santa file
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart 
import smtplib
import random
import os


smtp = smtplib.SMTP('smtp.gmail.com', 587) 
smtp.ehlo() 
smtp.starttls() 
smtp.login('secretsantauchicago@gmail.com', 'cbyp rmzb gdno tomd')

people = [("Ben", "benjaminheim43@gmail.com"), ("Grace", "gvs@uchicago.edu"),
          ("Ben2", "bheim@uchicago.edu"), ("Grace2", "gracesimmons140@yahoo.com")]
"""("Thomas", "thomasdegirolami@gmail.com"), ("Ingrid", "iappen@uchicago.edu"),
("Corinne", "cdswim@icloud.com"), ("Ethan", "ejick@uchicago.edu"), 
("Shiloh", "sophia57@uchicago.edu"), ("Piper", "psk@uchicago.edu"), 
("Camden", "camden@uchicago.edu"), ("Marcell", "milosidlo@uchicago.edu"), 
("Adrian", "agil04@uchicago.edu")"""

num_of_people = len(people)
first = people.pop(0)
person = first

for j in range(num_of_people):
    msg = MIMEMultipart()
    msg['Subject'] = 'Secret Santa Person'
    if(len(people) == 0):
        text = f"Your secret santa person is {first[0]}"
    else:
        idx = random.randint(0, len(people) - 1)
        text = f"Your secret santa person is {people[idx][0]}"
    msg.attach(MIMEText(text))
    to = [person[1]] 
    """smtp.sendmail(from_addr="secretsantauchicago@gmail.com", 
              to_addrs=to, msg=msg.as_string())"""
    if(len(people) != 0):
        person = people.pop(idx)
print("Emails sent!")
smtp.quit()