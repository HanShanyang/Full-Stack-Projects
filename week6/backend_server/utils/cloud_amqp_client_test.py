#!/usr/bin/env python
""" This script is to test cloudAMQP Client """

from cloud_amqp_client import CloudAMQPClient

CLOUDAMQP_URL = "amqp://enxfcyuc:q2H1J0SgO2msCXTYSaZN8gvo_3lD52gw@donkey.rmq.cloudamqp.com/enxfcyuc"
TEST_QUEUE_NAME = "test"


def test_basic():
    """ test basic cases """

    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)
    send = {"test":"test"}
    client.send_message(send)
    rev = client.get_message()

    assert send == rev
    print "test_basic passed."

if __name__ == "__main__":
    test_basic()
