from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from datetime import datetime

def print_hello():
    print("Hello, Airflow!")

with DAG(
    'simple_dag',
    default_args={'retries': 1},
    description='A simple DAG',
    schedule_interval=None,
    start_date=datetime(2025, 1, 27),
    catchup=False,
) as dag:
    task = PythonOperator(
        task_id='print_hello',
        python_callable=print_hello,
    )
