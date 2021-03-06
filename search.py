# -*- coding: utf-8 -*-


import numpy as np
import face_recognition
import sys
from csv import writer
import csv


# if len(sys.argv<2):
#     print("Not enough arguments")
# else:
#     inputfilepath = sys.argv[1]

inputfilepath = 'C:\\Users\\syeda\\OneDrive\\Desktop\\FaceRecognition\\o.jpg'
readimage = face_recognition.load_image_file(inputfilepath)
unknown_Encodings = face_recognition.face_encodings(readimage)[0]
#row_contents = [Name,person_type,Contact,Details,Encodings]
#append_list_as_row('datafile.csv', row_contents)

with open("datafile.csv", "r") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for lines in csv_reader:
        s = lines[4]
        KnownEncoding = np.array(list(map(float, s[1:-1].split())))
        results = face_recognition.compare_faces([KnownEncoding], unknown_Encodings)
        if results[0] == True:
            print("Name: ",lines[0])
            print("Type: ",lines[1])
            print("Contact: ",lines[2])
            print("Deatails: ",lines[3])
        else:
            print("not found")