from datetime import datetime
from airflow import models
from airflow.providers.amazon.aws.sensors.s3 import S3KeySensor

AWS_ACCESS_KEY_ID = "AKIAYS2NXD4ML4WY5P43"
AWS_SECRET_ACCESS_KEY = "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"


with models.DAG(
    dag_id="sensor_timeout",
    start_date=datetime(2025, 2, 6),
    schedule="58 17 * * *",
    catchup=False,
    max_active_runs=5,
):
    sensor = S3KeySensor(
        task_id="sensor_test",
        bucket_name="airflow-test-benhur",
        bucket_key="data.csv",
        verify=False,
        # aws_conn_id="aws_s3_conn",
        poke_interval=30,
        timeout=120,
        mode="reschedule",
        # deferrable=True,
        params={
            "aws_access_key_id": AWS_ACCESS_KEY_ID,
            "aws_secret_access_key": AWS_SECRET_ACCESS_KEY,
        },
    )

    # sensor_defer = S3KeySensor(
    #     task_id='sensor_test_defer',
    #     aws_conn_id='s3',
    #     bucket_name='my-s3-bucket',
    #     bucket_key='path/to/an/object',
    #     retries=3,
    #     wildcard_match=True,
    #     timeout=10,
    #     deferrable=True,
    # )
