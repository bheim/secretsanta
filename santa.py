#this is our secret santa file
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart 
import smtplib
import random
import os

#test
smtp = smtplib.SMTP('smtp.gmail.com', 587) 
smtp.ehlo() 
smtp.starttls() 
smtp.login('secretsantauchicago@gmail.com', 'cbyp rmzb gdno tomd')

people = [("Ben", "benjaminheim43@gmail.com"), ("Grace", "gvs@uchicago.edu"),
          ("Thomas", "thomasdegirolami@gmail.com"), ("Ingrid", "iappen@uchicago.edu"),
          ("Corinne", "cdswim@icloud.com"), ("Ethan", "ejick@uchicago.edu")]
chosen = []

for j in range(len(people)):
    i = j
    while (i == j) or (i in chosen):
        i = random.randint(0, len(people) - 1)
    person = people[i][0]
    text = f"Your secret santa person is {person}"
    chosen.append(i)
    msg = MIMEMultipart()
    msg['Subject'] = 'Secret Santa Person'
    msg.attach(MIMEText(text))
    to = [people[j][1]] 
    smtp.sendmail(from_addr="secretsantauchicago@gmail.com", 
              to_addrs=to, msg=msg.as_string())
print("Emails sent!")
smtp.quit()