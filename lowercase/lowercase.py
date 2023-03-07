def lowercase(txt=""):
    if not isinstance(txt, str):
        return ''

    if not txt:
        return ''

    ret = ''
    for char in txt:
        ret += lowercaseChar(char)

    return ret


def lowercaseChar(char):
    charCode = ord(char)
    lowercasedCharCode = charCode | (1 << 5)
    lowercasedChar = chr(lowercasedCharCode)

    return lowercasedChar
