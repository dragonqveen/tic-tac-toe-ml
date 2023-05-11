import matplotlib.pyplot as plt
import csv
import numpy as np
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from joblib import dump

# Carga dos dados de Treino
entrada = []
saidaDesejada = []

print("Printando os dados para Treino")
with open('datasets/dataset_train.txt') as arq:
    for line in arq:
        p = line.replace('x', '1').replace('o', '0').replace('b', '2')
        coluna = p.split(',')
        entrada.append([float(coluna[0]), float(coluna[1]), float(coluna[2]), float(coluna[3]),
                        float(coluna[4]), float(coluna[5]), float(coluna[6]), float(coluna[7]), float(coluna[8])])
        saidaDesejada.append(coluna[9].replace('0', 'o'))

print("Quantidade de dados: ", len(entrada))
for ind in range(0, len(entrada)):
    print("Features de entrada: ",
          entrada[ind], "-", "Classe: " + saidaDesejada[ind])

arq.close()

# Treinamento
# clf = MLPClassifier(solver='lbfgs', alpha=1e-5,hidden_layer_sizes=(5, 2), random_state=1)
print('Treinando...')
# model = MLPClassifier()  #com hiperametros default, para ver quais são consulte https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html
# model = MLPClassifier(verbose=True)  #Exibindo o treinamento, onde iteração é a época e loss é o erro quadrado médio
# '''
model = MLPClassifier(
    hidden_layer_sizes=(13,),
    max_iter=500,
    verbose=True,
    learning_rate='constant',
    learning_rate_init=0.2,
    momentum=0.2,
    activation='logistic',
    solver='adam',
)
# '''

model.fit(entrada, saidaDesejada)

# Carga dos dados de Teste
entrada = []
saidaDesejada = []

print("Printando os dados para Treino")
with open('datasets/dataset_teste.txt') as arq:
    for line in arq:
        p = line.replace('x', '1').replace('o', '0').replace('b', '2')
        coluna = p.split(',')
        entrada.append([float(coluna[0]), float(coluna[1]), float(coluna[2]), float(coluna[3]),
                        float(coluna[4]), float(coluna[5]), float(coluna[6]), float(coluna[7]), float(coluna[8])])
        saidaDesejada.append(coluna[9].replace('0', 'o'))

print("Quantidade de dados: ", len(entrada))
for ind in range(0, len(entrada)):
    print("Features de entrada: ",
          entrada[ind], "-", "Classe: " + saidaDesejada[ind])

arq.close()

# Generalização - Teste com Y
print('Testando...')
print(entrada[0])
saidaPredita = model.predict(entrada)
print('Predição: ', saidaPredita)

print(model.predict_proba(entrada))
# print(model.score(entrada,saidaDesejada,sample_weight=None))

mat = confusion_matrix(saidaDesejada, saidaPredita)
print(mat)
print(accuracy_score(saidaDesejada, saidaPredita))

dump(model, 'model.joblib')
