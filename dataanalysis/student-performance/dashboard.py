import streamlit as st
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

st.title("Student Performance Analyzer")

df = pd.read_csv("clean_students.csv")

df["Average"] = df[["Math","Science","English"]].mean(axis=1)

total_students = len(df)
avg_score = round(df["Average"].mean(), 2)
top_score = df["Average"].max()
lowest_score = df["Average"].min()

col1, col2, col3, col4 = st.columns(4)

col1.metric("Total Students", total_students)
col2.metric("Average Score", avg_score)
col3.metric("Top Score", top_score)
col4.metric("Lowest Score", lowest_score)

