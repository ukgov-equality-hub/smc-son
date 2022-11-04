from typing import List


def strtobool(string_value: str) -> bool:
    lowercase_string_value = string_value.lower()

    true_values: List[str] = ['y', 'yes', 't', 'true', 'on', '1']
    false_values: List[str] = ['n', 'no', 'f', 'false', 'off', '0']

    if lowercase_string_value in true_values:
        return True
    elif lowercase_string_value in false_values:
        return False
    else:
        raise ValueError()
