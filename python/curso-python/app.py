# -*- coding: UTF-8 -*-
import re

def cadastrar(nomes):
    print 'Digite o nome: '
    nome = raw_input()
    nomes.append(nome)

def alterar(nomes):
    print 'Qual nome vc gostaria de alterar?'
    nome = raw_input()
    tem_nome = nome in nomes
    if (tem_nome):
        print 'Informe o novo nome: '
        novo_nome = raw_input()
        posicao = nomes.index(nome)
        nomes[posicao] = novo_nome

def buscar(nomes):
    print 'Digite nome a procurar:'
    nome = raw_input()
    tem_nome = nome in nomes
    if (tem_nome):
        print "Nome %s está cadastrado" % (nome)
    else:
        print "Nome %s não está cadastrado" % (nome)

def buscar_com_regex(nomes):
    print 'Digite o nome a procurar:'
    nome = raw_input()
    nomes_concatenados = ' '.join(nomes)
    resultados = re.findall(nome, nomes_concatenados)
    if (resultados):
        print(resultados)
    else:
        print "Nome %s não está cadastrado" % (nome)

def listar(nomes):
    print 'Listando nomes'
    for nome in nomes:
        print nome

def remover(nomes):
    print 'Qual nome você gostaria de remover?'
    nome = raw_input()
    nomes.remove(nome)

def menu():
    nomes = []
    escolha = ''
    while (escolha != '0'):
        print 'Digite: 1 - Cadastrar, 2 - Listar, 3 - Remover, 4 - Alterar, 5 - Buscar, 6 - Buscar com Regex, 0 - Sair'
        escolha = raw_input()

        if (escolha == '1'):
            cadastrar(nomes)

        if (escolha == '2'):
            listar(nomes)

        if (escolha == '3'):
            remover(nomes)

        if (escolha == '4'):
            alterar(nomes)

        if (escolha == '5'):
            buscar(nomes)
        
        if (escolha == '6'):
            buscar_com_regex(nomes)

menu()
