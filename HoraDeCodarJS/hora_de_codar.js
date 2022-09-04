
        //Declaração de Funções para todo o Programa
        function calculoRetangulo(){

            let baseRetangulo = parseInt(prompt("Insira a medida da Base do Retangulo"));
            let alturaRetangulo = parseInt(prompt("Insira a medida da Altura do Retangulo"));
            let areaRetangulo = baseRetangulo * alturaRetangulo;

            let resultadoRetangulo = "O resultado do calculo da Area do Retangulo é " + areaRetangulo;

            return(alert(resultadoRetangulo));

        }

        function calculoQuadrado(){

            let ladoQuadrado_1 = parseInt(prompt("Insira a medida do Lado Esquerdo do Quadrado"));
            let ladoQuadrado_2 = parseInt(prompt("Insira a medida do Lado Direito do Quadrado"));

            if(ladoQuadrado_2 != ladoQuadrado_1){

                ladoQuadrado_2 = ladoQuadrado_1;

            }

            let ladoVezesLado = ladoQuadrado_1 * ladoQuadrado_2;
            let areaQuadrado = ladoVezesLado**2;
            let resultadoQuadrado = "O resultado do calculo da Area do Quadrado é " + areaQuadrado;

            return(alert(resultadoQuadrado));
        }

        function calculoLosango(){

            let diagonalMaiorLosango = parseInt(prompt("Insira a medida da Diagonal Maior do Losango"));
            let diagonalMenorLosango = parseInt(prompt("Insira  a medida da Diagonal Menor do Losango"));
            let areaLosango = (diagonalMaiorLosango * diagonalMenorLosango) / 2;

            let resultadoLosango = "O resultado do calculo da Area do Losango é " + areaLosango;

            return(alert(resultadoLosango));

        }

        function calculoTrapezio(){

            let baseMaiorTrapezio = parseInt(prompt("Insira a medida da Base Maior do Trapezio"));
            let baseMenorTrapezio = parseInt(prompt("Insira a medida da Base Menor do Trapezio"));
            let alturaTrapezio = parseInt(prompt("Insira a medida da Altura do Trapezio"));
            let areaTrapezio = ((baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapezio) / 2;

            let resultadoTrapezio = "O resultado do calculo da Area do Trapezio é " + areaTrapezio;

            return(alert(resultadoTrapezio));

        }

        function calculoParalelogramo(){

            let baseParalelogramo = parseInt(prompt("Insira a medida da Base do Paralelogramo"));
            let alturaParalelogramo = parseInt(prompt("Insira a medida da Altura do Paralelogramo"));
            let areaParalelogramo = baseParalelogramo * alturaParalelogramo;

            let resultadoParalelogramo = "O resultado do calculo da Area do Paralelogramo é " + areaParalelogramo;

            return(alert(resultadoParalelogramo));

        }

        function calculoTriangulo(){

            let baseTriangulo = parseInt(prompt("Insira a medida da Base do Triangulo"));
            let alturaTriangulo = parseInt(prompt("Insira a medida da Altura do Triangulo"));
            let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

            let resultadoTriangulo = "O resultado do calculo da Area do Triangulo é " + areaTriangulo;

            return(alert(resultadoTriangulo));

        }

        function calculoCirculo(){

            let raioCirculo = parseInt(prompt("Insira a medida do Raio do Circulo"));
            let areaCirculo = 3.14 * (raioCirculo ** 2);

            let resultadoCirculo = "O resultado do calculo da Area do Circulo é " + areaCirculo;

            return(alert(resultadoCirculo));

        }

        function exerc1(){

            let nomeDoCarro = "Fusca";

            alert("O nome do carro é " + nomeDoCarro);

        }

        function exerc2(){

            let nomeDoUsuario = prompt("Qual o seu nome? Por favor, insira abaixo");

            alert("Olá " + nomeDoUsuario);

        }

        function exerc3(){

            let nomeDoUsuario = prompt("Insira seu nome");
            let idadeDoUsuario = prompt("Insira a sua idade");

            alert("Olá, "  + nomeDoUsuario + ", sua idade é " + idadeDoUsuario);

        }

        function exerc4(){

            /*O exercicio 4 possui mais de um calculo a ser feito, para anão ficar recarregando a pagina foi feito um switch case e um laço de repeticação
            para que somente saia da função quando o usuario tiver feito todos os calculos ou quando for solicitado*/

            
            alert("ESSE EXERCICIO POSSUI 7 OPCOES DE CALCULOS DE AREAS DE DIFERENTES POLIGNOS, CASO QUEIRA SAIR SELECIONE A OPCÃO 8");
            
            let opcaoFunção = prompt("Insira opção desejada");

            
                switch(opcaoFunção){

                    case "1":

                        alert("CALCULO DA AREA DE UM RETANGULO");
                        calculoRetangulo();
                        break;

                    case "2":

                        alert("CALCULO DA AREA DE UM QUADRADO");
                        calculoQuadrado();
                        break;

                    case "3":

                        alert("CALCULO DA AREA DE UM LOSANGO");
                        calculoLosango();
                        break;

                    case "4":

                        alert("CALCULO DA AREA DE UM TRAPÉZIO");
                        calculoTrapezio();
                        break;

                    case "5":

                        alert("CALCULO  DA AREA DE UM PARALELOGRAMO");
                        calculoParalelogramo();
                        break;

                    case "6":

                        alert("CALCULO DA AREA DE UM TRIÂNGULO");
                        calculoTriangulo();
                        break;

                    case "7":

                        alert("CALCULO DA AREA DE UM CÍRCULO");
                        calculoCirculo();
                        break;
                    
                    case "8":

                        alert("SAINDO DO EXERCICIO 4");
                        break;

                    default:

                        alert("OPÇÃO INVALIDA, SELECIONE UMA OPÇÃO DE 1 A 8, SENDO 8 PARA SAIR DO EXERCICIO");
                }


            }
        
            //Switch Case principal do Programa 
        alert("Bem vindo ao Programa de Exercicios Hora de Codar, este programa possui 4 exercicios, caso queira sair do programa selecione opcao 5");
        
            
        let opcao = prompt("Insira a opcao desejada");

            switch(opcao){

                case "1": 
                    
                    alert("EXERCICIO 1");
                    exerc1();
                    break;

                case "2":
                        
                    alert("EXERCICIO 2");
                    exerc2();
                    break;  

                case "3": 

                    alert("EXERCICIO 3")
                    exerc3();
                    break;

                case "4":

                    alert("EXERCICIO 4")
                    exerc4();

                case "5":

                    alert("Saindo do Programa");
                    break;
                    
                default:

                    alert("opcao invalida, insira uma opcao de 1 a 7");

            }
        