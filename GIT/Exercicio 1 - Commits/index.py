def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

def main():
    print("Bem-vindo ao conversor de temperaturas!")
    temp_c = float(input("Digite a temperatura em Celsius: "))
    temp_f = celsius_to_fahrenheit(temp_c)
    print(f"{temp_c}°C é igual a {temp_f}°F")
    temp_f = float(input("Digite a temperatura em Fahrenheit: "))
    temp_c = fahrenheit_to_celsius(temp_f)
    print(f"{temp_f}°F é igual a {temp_c}°C")

if __name__ == "__main__":
    main()