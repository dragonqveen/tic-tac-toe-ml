from joblib import load
import os

#Para converter os valores, para a IA analizar
basedir = os.path.abspath(os.path.dirname(__file__))
model = load(os.path.join(basedir, 'model.joblib')) 

def convert(val):
    if val == 'x':
        return 1.0
    elif val == 'o':
        return 0.0
    else:
        return 2.0

def get_board_status(entrada):
    qnt_spv=entrada.count("")#conta quantos espaços vazios existem
    if qnt_spv <= 4:
        saidaPredita = model.predict([list(map(convert, entrada))])
        print(saidaPredita)
        if 'positive\n' in saidaPredita:
            return 'Ganhou'
        if qnt_spv == 0:
             return'Empate'
    return 'Em Andamento'        