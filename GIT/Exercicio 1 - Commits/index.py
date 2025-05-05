def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def main():
    print("Bem-vindo ao conversor de temperaturas!")
    temp_c = float(input("Digite a temperatura em Celsius: "))
    temp_f = celsius_to_fahrenheit(temp_c)
    print(f"{temp_c}°C é igual a {temp_f}°F")

if __name__ == "__main__":
    main()