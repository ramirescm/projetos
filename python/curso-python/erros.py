from models import *
try:
    arquivo = open('perfils.csv', 'r')
    valores = arquivo.readline().split(',')
    Perfil_Vip(*valores)
    print('arquivo foi aberto')
    arquivo.close()
except (IOError, TypeError) as erro:
    print('Erro: %s' % erro )