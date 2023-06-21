jurosSimplesT=0

      capital=Number(window.prompt("Digite o valor da capital: "))

      periodo=Number(window.prompt("Digite o valor do período em meses: "))

      taxa_de_juros=Number(window.prompt("Digite o valor da taxa de juros (em %): "))

      for (i=0; i<periodo; i++)
      //juros simples j=c*i*t 
      //repetição saindo de zero (0), até o número anterior ao perído
      //ex se o periodo for 12, mês 1, 2, 3... mes 12 = 12 repetições.

      {
      juros_simples=capital*taxa_de_juros/100
      document.write(`\n Juros simples no mês` + (i+1) +" :"+juros_simples.toFixed(2));
      jurosSimplesT+= juros_simples //jurosSimplesT = juros_simples + juros_simples
      }

      document.write("\n Juros simples totais: " +jurosSimplesT.toFixed(2)); //imprimir o que acumular.

      document.write("\n Juros simples totais " +capital*taxa_de_juros/100*periodo + "\n\n") 
      //imprimir tudo através da formula.
      
      
      
      //juros composto J=C[(1+i)^n]*-1 
      jurosCompostoT=0
      capitalAcumulado=capital

      for (i=0; i<periodo; i++)
    
      {
      juros_composto=capitalAcumulado*taxa_de_juros/100

      document.write(`\n Juros compostos no mês` + (i+1) +" :"+juros_composto.toFixed(2));
      jurosCompostoT+= juros_composto 
      capitalAcumulado+=juros_composto
      }

      document.write("\n Juros compostos totais: " +jurosCompostoT.toFixed(2));//imprimir tudo através da formula.
      
      //ou usar a formula de juros composto
      document.write("\n Juros compostos totais: "+ (capital*Math.pow(1+taxa_de_juros/100,período)-1)).toFixed(2)