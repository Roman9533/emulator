    let balance = 10000;

        while(true){
        const choice = prompt(
            "Меню действий:",
            "-Показать баланс",
            "-Снять средства",
            "-Пополнить счет",
            "-Выход",
        );
        switch(choice){
            case "1":
                alert(`Ваш текуший баланс: ${balance}₽`);
                break;
            
            
            case "2":
            const withdrawAmount = Number(prompt("Введите сумму для снятия:"));
            if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                alert("Ошибка: введите корректную сумму!");
            } else if (withdrawAmount > balance) {
                alert("Недостаточно средств!");
            } else {
                 balance -= withdrawAmount;
                alert(`Вы сняли ${withdrawAmount}₽. Новый баланс: ${balance}₽`);
            }
            break;
                
                
                    
        }

        }

