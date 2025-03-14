from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator

default_args = {
    "owner": "airflow",
    "retries": 2,
    "retry_delay": timedelta(minutes=5),
    "start_date": datetime(2025, 1, 1),
    "catchup": False,
}

with DAG(
    dag_id="example_dag",
    default_args=default_args,
    description="A simple example DAG",
    schedule_interval="0 12 * * *",
    catchup=False,
) as dag:

    task_1 = BashOperator(
        task_id="print_hello",
        bash_command="echo 'Hello, Airflow!'",
    )

    def greet():
        print("Welcome to Apache Airflow!")

    task_2 = PythonOperator(
        task_id="python_greet",
        python_callable=greet,
    )

    task_3 = BashOperator(
        task_id="final_task",
        bash_command="echo 'All tasks are complete!'",
    )

    task_1 >> task_2 >> task_3
