# -*- coding: UTF-8 -*-

class Perfil(object):
    'Classe padrão para perfis de usuários'

    def __init__(self, nome, telefone, empresa, peso, altura, tipo_perfil):
        self.nome = nome
        self.telefone = telefone
        self.empresa = empresa
        self.peso = float(peso)
        self.altura = float(altura)
        self.__curtidas = 0
        self.__tipo = int(tipo_perfil)

    def imprimir(self):
        print 'Nome: %s, Telefone: %s, Empresa: %s' % (self.nome, self.telefone, self.empresa)

    def imprimir_imc(self):
        imc = self.peso / (self.altura ** 2)
        print 'IMC de %s é %s' % (self.nome, imc)

    def curtir(self):
        self.__curtidas+=1

    def obter_curtidas(self):
        return self.__curtidas

    def obter_tipo_perfil(self):
        return self.__tipo

    @classmethod
    def gerar_perfis(classe, nome_arquivo):
        arquivo = open(nome_arquivo, 'r')
        perfis = []
        for linha in arquivo:
            valores = linha.split(',')
            if(len(valores) is not 6):
                raise Perfil_Error('Uma linha no arquivo deve ter 6 valores') #lançando Perfil_Error
            perfis.append(classe(*valores))
        arquivo.close()
        return perfis

class Perfil_Vip(Perfil):
    'Classe padrão para perfis de usuários VIPs'

    def __init__(self, nome, telefone, empresa, peso, altura, tipo_perfil, apelido = ''):
        super(Perfil_Vip, self).__init__(nome, telefone, empresa, peso, altura, tipo_perfil)
        self.apelido = apelido

    def obter_creditos(self):
        return super(Perfil_Vip, self).obter_curtidas() * 10

class Perfil_Error(Exception):
    def __init__(self, mensagem):
        self.mensagem = mensagem

    def __str__(self):
        return repr(self.mensagem)

class Data(object):
    'Classe padrão para formatação de datas'

    def __init__(self, dia, mes, ano):
        self.dia = dia
        self.mes = mes
        self.ano = ano

    def imprimir(self):
        print '%s/%s/%s' % (self.dia, self.mes, self.ano)
