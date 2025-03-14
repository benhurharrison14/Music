from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime
import smtplib


def failing_task():
    raise Exception("This task failed!")


default_args = {
    "owner": "airflow",
    "start_date": datetime(2024, 1, 1),
    "email_on_failure": True,  # Enable failure alerts
    "email": ["benhur.harrison@zemosolabs.com"],  # Change to your email
}

dag = DAG(
    "dag_failure_alert",
    default_args=default_args,
    schedule_interval="@daily",
    catchup=False,
)

task = PythonOperator(task_id="failing_task1", python_callable=failing_task, dag=dag)
