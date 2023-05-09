#Para converter os valores, para a IA analizar
def converte(val):
    if val == 'X':
        return 1.0
    elif val == 'O':
        return 0.0
    else:
        return 2.0