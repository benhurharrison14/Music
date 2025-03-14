def add_value(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        result += 100
        return result
    return wrapper


def sub_value(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        result -= 50
        return result
    return wrapper


def multiply_value(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        result *= 10
        return result
    return wrapper


@add_value
@sub_value
@multiply_value
def operation_one(a, b):
    return a+b


print(operation_one(10, 20))


@multiply_value
@sub_value
@add_value
def operation_two(a, b):
    return a+b


print(operation_two(10, 20))
