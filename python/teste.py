import random


palavras = ["python", "programacao", "forca", "computador", "desenvolvedor"]



palavra_secreta = random.choice(palavras)
letras_descobertas = [""] * len(palavra_secreta)

tentativas = 6
