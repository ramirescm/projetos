#arquivo teste_escrita.py
print 'Escrita em arquivo'
arquivo = open('teste.txt', 'a')
arquivo.write('Python rocks \n')
arquivo.close()

#para leitura apenas, r - read
print 'Leitura em arquivo'
arquivo1 = open('perfils.csv','r')
for linha in arquivo1:
    print linha

arquivo1.close()

#para leitura e escrita (w+)
arquivo2 = open('perfis.csv','w+')

#apenas escrita 
print 'Escrita em arquivo'
arquivo_novo = open('arquivo_novo.csv','w') 
arquivo_novo.write('Pedro Gomes, 23-45631234, Gomes e amigos \n')
arquivo_novo.close()