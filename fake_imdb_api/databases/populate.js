const { Item } = require('./db');

const itens = [{
    "titulo": "A Origem",
    "ano_lancamento": "2010",
    "direcao": "Christopher Nolan",
    "sinopse": "Dom Cobb é um ladrão habilidoso, o melhor absoluto na arte perigosa da extração, roubando segredos valiosos do fundo do subconsciente durante o estado de sonho, quando a mente está mais vulnerável. A rarahabilidade de Cobb fez dele um jogador cobiçado neste novo mundo traiçoeiro de espionagem corporativa,mas também fez dele um fugitivo internacional e custou a ele tudo o que já amou. Agora, Cobb está sendo oferecida uma chance de redenção. Um último emprego poderia devolver sua vida, mas apenas se ele pudesse realizar o impossível, o início. Em vez do roubo perfeito, Cobb e sua equipe de especialistas precisam dar o contrário: a tarefa deles não é roubar uma idéia, mas plantá-la. Se eles conseguirem, pode ser o crime perfeito. Mas nenhuma quantidade de planejamento cuidadoso ou experiência pode preparar a equipe para o inimigo perigoso que parece prever todos os seus movimentos. Um inimigo que apenas Cobb poderia ter previsto. Escrito por Warner Bros. Pictures",
    "nota_avaliacao": "8,8",
    "genero": "Ação  | Aventura  | Ficção científica  | Suspense"
},
{
    "titulo": "Matrix",
    "ano_lancamento": "1999",
    "direcao": "Lana Wachowski, Lilly Wachowski",
    "sinopse": "Thomas A. Anderson é um homem que vive duas vidas. De dia, ele é um programador de computador comum e à noite um hacker conhecido como Neo. Neo sempre questionou sua realidade, mas a verdade está muito além de sua imaginação. Neo se vê alvejado pela polícia quando é contatado por Morpheus, um lendário hacker de computador chamado terrorista pelo governo. Morfeu desperta Neo para o mundo real, um deserto devastado, onde a maior parte da humanidade foi capturada por uma raça de máquinas que vivem do calor do corpo humano e da energia eletroquímica e que aprisionam suas mentes dentro de uma realidade artificial conhecida como Matrix. Como rebelde contra as máquinas, Neo deve retornar à Matrix e enfrentar os agentes: programas de computador superpoderosos dedicados a extinguir Neo e toda a rebelião humana. Escrito por redcommander27",
    "nota_avaliacao": "8,7",
    "genero": "Ação  | Ficção científica"
},
{
    "titulo": "Vingadores: Guerra Infinita",
    "ano_lancamento": "2018",
    "direcao": "Anthony Russo, Joe Russo",
    "sinopse": "Enquanto os Vingadores e seus aliados continuam protegendo o mundo de ameaças grandes demais para qualquer herói, um novo perigo surgiu das sombras cósmicas: Thanos. Déspota da infâmia intergaláctica, seu objetivo é coletar todas as seis Pedras do Infinito, artefatos de poder inimaginável, e usá-las para infligir sua vontade distorcida a toda a realidade. Tudo o que os Vingadores lutaram levou até esse momento, o destino da Terra e a existência nunca foram tão incertas. Escrito por Marvel Studios",
    "nota_avaliacao": "8,5",
    "genero": "Ação  | Aventura  | Ficção científica"
},
{
    "titulo": "Gladiador",
    "ano_lancamento": "2000",
    "direcao": "Ridley Scott",
    "sinopse": "Maximus é um poderoso general romano, amado pelo povo e pelo antigo imperador, Marco Aurélio. Antes de sua morte, o imperador escolhe Maximus como herdeiro de seu próprio filho, Commodus, e uma luta pelo poder deixa Maximus e sua família condenados à morte. O poderoso general é incapaz de salvar sua família, e sua perda de vontade permite que ele seja capturado e colocado nos jogos do Gladiador até morrer. O único desejo que o alimenta agora é a chance de subir ao topo para que ele seja capaz de olhar nos olhos do homem que sentirá sua vingança. Escrito por Chris "Morphy" Terry",
    "nota_avaliacao": "8,5",
    "genero": "Ação  | Aventura  | Drama"
},
{
    "titulo": "Uri: o ataque cirúrgico",
    "ano_lancamento": "2019",
    "direcao": "Aditya dhar",
    "sinopse": "Dividido em cinco capítulos, o filme narra os eventos do ataque cirúrgico realizado pelos militares indianos contra suspeitos de militantes no Paquistão ocupados na Caxemira. Ele conta a história dos 11 eventos tumultuados sobre os quais a operação foi realizada. As forças especiais do exército indiano realizam uma operação secreta para vingar a morte de outros soldados do exército em sua base por um grupo terrorista. Escrito por Santhosh",
    "nota_avaliacao": "8,4",
    "genero": "Ação  | Drama  | Guerra"
},
{
    "titulo": "Mad Max: Estrada da Fúria",
    "ano_lancamento": "2015",
    "direcao": "George Miller",
    "sinopse": "Uma história apocalíptica que se passa nos confins do planeta, em uma paisagem desértica onde a humanidade está destruída, e quase todos estão loucos lutando pelas necessidades da vida. Dentro deste mundo existem dois rebeldes em fuga que talvez possam restaurar a ordem. Há Max, um homem de ação e um homem de poucas palavras, que busca paz de espírito após a perda de sua esposa e filho após o caos. E Furiosa, uma mulher de ação e uma mulher que acredita que seu caminho para a sobrevivência pode ser alcançado se conseguir atravessar o deserto de volta à terra natal da infância. Escrito por Produção",
    "nota_avaliacao": "8,1",
    "genero": "Ação  | Aventura  | Comédia  | Ficção científica"
},
{
    "titulo": "Jogador Nº 1",
    "ano_lancamento": "2018",
    "direcao": "Steven Spielberg",
    "sinopse": "No ano de 2045, o mundo real é um lugar difícil. A única vez que Wade Watts (Tye Sheridan) realmente se sente vivo é quando ele foge para o OASIS, um imersivo universo virtual onde a maioria da humanidade passa seus dias. No OASIS, você pode ir a qualquer lugar, fazer qualquer coisa, ser alguém - os únicos limites são a sua própria imaginação. O OASIS foi criado pelo brilhante e excêntrico James Halliday (Mark Rylance), que deixou sua imensa fortuna e controle total do Oasis para o vencedor de um concurso de três partes que ele projetou para encontrar um herdeiro digno. Quando Wade vence o primeiro desafio da caça ao tesouro, ele e seus amigos - também conhecidos como os Cinco Elevados - são lançados em um universo fantástico de descoberta e perigo para salvar o OASIS. Escrito por Warner Bros.",
    "nota_avaliacao": "7,5",
    "genero": "Ação  | Aventura  | Ficção científica"
},
{
    "titulo": "Alita: Anjo de Combate",
    "ano_lancamento": "2019",
    "direcao": "Robert Rodriguez",
    "sinopse": "Alita é uma criação de uma era de desespero. Encontrada pelo misterioso Dr. Ido enquanto vasculhava partes de cyborg, Alita se torna um ser letal e perigoso. Ela não consegue se lembrar de quem é ou de onde veio. Mas para o Dr. Ido, a verdade é muito clara. Ela é a pessoa que pode quebrar o ciclo de morte e destruição deixado por Tiphares. Mas para realizar seu verdadeiro propósito, ela deve lutar e matar. E é aí que o verdadeiro significado de Alita se manifesta. Ela é um anjo do céu. Ela é um anjo da morte. Escrito por Anthony Harmon",
    "nota_avaliacao": "7,4",
    "genero": "Ação  | Aventura  | Ficção científica  | Suspense"
},
{
    "titulo": "Sniper Americano",
    "ano_lancamento": "2014",
    "direcao": "Clint Eastwood",
    "sinopse": "Chris Kyle (Bradley Cooper) não passava de um homem do Texas que sonhava em se tornar um cowboy, mas aos trinta anos descobriu que talvez sua vida precisasse de algo diferente, algo em que pudesse expressar seu verdadeiro talento, algo que pudesse ajudar a América. sua luta contra o terrorismo. Então ele se juntou aos SEALs para se tornar um atirador de elite. Depois de se casar com Taya (Sienna Miller), Kyle e os outros membros da equipe são convocados para sua primeira turnê no Iraque. A luta de Kyle não é com suas missões, mas sobre seu relacionamento com a realidade da guerra e, uma vez que voltou para casa, como ele consegue lidar com isso com sua vida urbana, sua esposa e filhos. Escrito por Evandro Martirano",
    "nota_avaliacao": "7,3",
    "genero": "Ação  | biografia  | Drama  | Guerra"
},
{
    "titulo": "Parasita",
    "ano_lancamento": "2019",
    "direcao": "Joon-ho Bong",
    "sinopse": "Desempregado, sem um tostão e, acima de tudo, sem esperança, o patriarca desmotivado, Ki-taek, e sua família igualmente ambiciosa - sua esposa de apoio, Chung-sook; sua cínica filha de vinte e poucos anos, Ki-jung, e seu filho em idade universitária, Ki-woo - ocupam-se trabalhando para amendoins em seu esquálido apartamento no porão. Então, por pura sorte, uma proposta lucrativa de negócios abrirá o caminho para um esquema insidiosamente sutil, pois Ki-woo reúne coragem para posar como tutor de inglês da filha adolescente da rica família Park. Agora, o cenário parece preparado para uma guerra incessante de vencedores, levando tudo. Como se livrar de um parasita? Escrito por Nick Riganas",
    "nota_avaliacao": "8,5",
    "genero": "Comédia  | Drama  | Suspense"
},
{
    "titulo": "Rainha (Queen)",
    "ano_lancamento": "2013",
    "direcao": "Vikas Bahl",
    "sinopse": "Queen é um filme sobre crescer. Rani (Kangana Ranaut) é uma garota de Delhi de uma família conservadora que é abandonada por seu noivo pouco antes de seu casamento. Chocada com isso, ela decide partir sozinha para a lua de mel planejada. Enquanto viaja pelo mundo e conhece novas pessoas, ela ganha novas experiências e descobre sua própria identidade. Escrito por Am. P.",
    "nota_avaliacao": "8,2",
    "genero": "Comédia  | Drama"
},
{
    "titulo": "PK",
    "ano_lacamento": "2014",
    "direcao": "Rajkumar Hirani",
    "sinopse": "PK é uma comédia de idéias sobre um estranho na cidade, que faz perguntas que ninguém fez antes. São perguntas inocentes e infantis, mas trazem respostas catastróficas. As pessoas que estão no seu caminho por gerações, são forçadas a reavaliar seu mundo quando o vêem dos olhos inocentes de PK. No processo, PK faz amigos leais e inimigos poderosos. Repara vidas quebradas e irrita o estabelecimento. A curiosidade infantil de PK se transforma em uma odisseia espiritual para ele e milhões de outros. O filme é uma exploração ambiciosa e original de filosofias complexas. É também um conto simples e humano de amor, riso e desapego. Finalmente, é uma saga emocionante sobre uma amizade entre estranhos de mundos separados. Escrito por Abhijat Joshi",
    "nota_avaliacao": "8,2",
    "genero": "Comédia  | Drama  | Fantasia"
},
{
    "titulo": "OMG: Oh meu Deus!",
    "ano_lacamento": "2012",
    "direcao": "Umesh Shukla",
    "sinopse": "Kanji Lalji Mehta, embora ateu, é dono de uma pequena loja que vende artigos religiosos, inventando histórias de galo e boi para extrair taxas mais altas de seus clientes por seus produtos. Quando, desafiando abertamente a Deus, um terremoto destrói sua (e somente a sua) única fonte de renda, com a companhia de seguros se recusando a pagar com base no fato de ser um 'ato de Deus', Kanjibhai leva Deus ao tribunal. Com muitas pessoas igualmente infelizes depositando suas esperanças nele, a falta de experiência no tribunal de Kanji pode deixá-lo incapaz de provar seu argumento - isto é, até ser abordado por um homem que se apresenta como Krishna Vasudeva Yadav. Krishna ajuda Kanji a vencer seu caso, sua família e ajuda-o a encontrar sua fé em Deus, mostrando ao longo do caminho como os sacerdotes podem transformar a religião em um negócio e que Deus pode ser encontrado em todos os lugares, principalmente em uma casa de culto. Escrito por srijanarora-152-448595 / revisado por statmanjeff",
    "nota_avaliacao": "8,2",
    "genero": "Comédia  | Drama  | Fantasia"
},
{
    "titulo": "Pinte de Açafrão",
    "ano_lacamento": "2006",
    "direcao": "Rakeysh Omprakash Mehra",
    "sinopse": "Sue vem para a Índia para fazer um filme sobre revolucionários indianos. Ela é ajudada por sua amiga Sonia, que a apresenta a seus amigos Karan, Aslam, Sukhi e seu DJ principal. Noivo da tenista Ajay Rathod também se junta à gangue quando está na cidade. Sempre se meteu em problemas com um membro político Laxman que se opõe à sua cultura ocidental.Depois de muitas audições, Sue decide escalar DJ e sua amiga em seu filme.Ela também coloca Laxman em um papel, terminando assim sua disputa com a gangue.Todas as coisas estão indo bem Até Ajay morrer em acidente de avião, mas consegue salvar todos a bordo. O ministro do Estado declara que Ajay morreu devido a sua própria negligência. DJ e seus amigos não podem se envergonhar do ministro Ajay e decidir lutar pela justiça. terá eventos feios devido a jogos políticos. Escrito por alex.mjacko@gmail.",
    "nota_avaliacao": "8,2",
    "genero": "Comédia  | Drama"
},
{
    "titulo": "Relatos Selvagens",
    "ano_lacamento": "2014",
    "direcao": "Damián Szifron",
    "sinopse": "O filme é dividido em seis segmentos. (1) 'Pasternak': enquanto viajavam de avião, um modelo e um crítico de música percebem que têm um conhecido em comum chamado Pasternak. Logo descobrem que todos os passageiros e tripulantes a bordo conhecem Pasternak. Isso é coincidência? (2) "The Rats": Uma garçonete reconhece seu cliente - é o agiota que causou uma tragédia em sua família. O cozinheiro sugere misturar veneno de rato com a comida, mas a garçonete se recusa. A cozinheira teimosa, no entanto, decide prosseguir com seu plano. (3) "The Strongest": Dois motoristas em uma estrada solitária têm uma discussão com consequências trágicas. (4) "Little Bomb": um engenheiro de demolição tem seu carro rebocado por um caminhão para estacionar em um lugar errado e ele tem uma discussão com o funcionário da empresa de reboque. Este evento destrói sua vida privada e profissional, e ele planeja vingança contra a empresa de reboque corrupta e a prefeitura. (5) "A proposta": um filho imprudente de uma família rica sofre um acidente durante a noite, em ... Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "nota_avaliacao": "8,1",
    "genero": "Comédia  | Drama  | Suspense"
},
{
    "titulo": "Barfi!",
    "ano_lacamento": "2012",
    "direcao": "Anurag Basu",
    "sinopse": "Situado na década de 1970 em um belo canto da Índia, Barfi. é a história de três jovens que aprendem que o amor não pode ser definido nem contido pelas normas da sociedade de normal e anormal. Barfi, um garoto com deficiência auditiva e de fala, se apaixona por Shruti. Apesar de seu profundo afeto por Barfii, Shruti cede à pressão social e dos pais para se casar com um homem "normal" e levar uma vida "normal". Muitos anos depois, seus caminhos se cruzam mais uma vez quando Barfi, agora apaixonado por Jhilmil, foge da polícia. Barfi está procurando desesperadamente Jhilmil, que desapareceu. A percepção de Shruti de que Jhilmil é autista a faz reconhecer que o amor verdadeiro é realmente cego. Travado em um jogo de gato e rato, em busca da garota que Barfi ama, Shruti percebe que ela ainda está apaixonada por ele. Escrito por Mohijit Mukerjee",
    "nota_avaliacao": "8,1",
    "genero": "Comedy | Drama | Romance"
},
{
    "titulo": "Zindagi Na Milegi Dobara",
    "ano_lacamento": "2011",
    "direcao": "Zoya Akhtar",
    "sinopse": "Três amigos decidem transformar suas férias de fantasia em realidade depois que um deles fica noivo.",
    "nota_avaliacao": "8,1",
    "genero": "Comédia  | Drama"
},
{
    "titulo": "Era Uma Vez em... Hollywood ",
    "ano_lacamento": "2019",
    "direcao": "Quentin Tarantino",
    "sinopse": "Era uma vez ... de Quentin Tarantino ... em Hollywood visita 1969 Los Angeles, onde tudo está mudando, como o astro de TV Rick Dalton (Leonardo DiCaprio) e seu dublê de longa data, Cliff Booth (Brad Pitt), percorrem um setor que mal reconhecem não mais. O nono filme do roteirista e diretor apresenta um grande elenco e várias histórias em homenagem aos momentos finais da era de ouro de Hollywood.",
    "nota_avaliacao": "8,0",
    "genero": "Comédia  | Drama"
},
{
    "titulo": "La La Land: Cantando Estações",
    "ano_lacamento": "2016",
    "direcao": "Damien Chazelle",
    "sinopse": "Atriz aspirante serve café com leite para as estrelas de cinema entre as audições e o músico de jazz Sebastian se diverte tocando em coquetéis em bares sombrios. Mas, à medida que o sucesso aumenta, eles são confrontados com decisões que desgastam o tecido frágil de seu caso amoroso, e os sonhos que eles tanto trabalharam para manter um no outro ameaçam separá-los. Escrito por Eirini",
    "nota_avaliacao": "8,0",
    "genero": "Comédia  | Drama  | música  | musical  | Romance"
},
{
    "titulo": "Ela",
    "ano_lancamento": "2013",
    "direcao": "Spike Jonze",
    "sinopse": "Theodore é um homem solitário nos estágios finais de seu divórcio. Quando ele não está trabalhando como escritor de cartas, seu tempo de inatividade é gasto jogando videogame e ocasionalmente saindo com os amigos. Ele decide comprar o novo OS1, anunciado como o primeiro sistema operacional artificialmente inteligente do mundo: "Não é apenas um sistema operacional, é uma consciência", afirma o anúncio. Theodore rapidamente se vê atraído por Samantha, a voz por trás do seu OS1. Quando começam a passar o tempo juntos, crescem cada vez mais perto e acabam se apaixonando. Tendo se apaixonado por seu sistema operacional, Theodore se vê lidando com sentimentos de grande alegria e dúvida. Como sistema operacional, Samantha tem uma inteligência poderosa que ela usa para ajudar Theodore de maneiras que outros não tinham, Escrito por Bob Philpot",
    "nota_avaliacao": "8,0",
    "genero": "Drama  | Romance | Ficção científica"

},
{
    "titulo": "Quem Quer Ser um Milionário?",
    "ano_lancamento": "2008",
    "direcao": "Danny Boyle , Loveleen Tandan (co-diretor)
    "sinopse": "A história de Jamal Malik, um órfão de 18 anos das favelas de Mumbai, que está prestes a experimentar o maior dia de sua vida. Com toda a nação assistindo, ele está a apenas uma questão de ganhar 20 milhões de rúpias no Kaun Banega Crorepati da Índia ?(2000) (Quem quer ser um milionário?) Mas quando o programa termina a noite, a polícia o prende por suspeita de trapaça; como poderia um garoto de rua saber tanto? Desesperado para provar sua inocência, Jamal conta a história de sua vida na favela onde ele e seu irmão cresceram, de suas aventuras juntos na estrada, de encontros cruéis com gangues locais e de Latika, a garota que ele amou e perdeu. Cada capítulo de sua história revela a chave da resposta para uma das perguntas do game show. Cada capítulo da história cada vez mais estratificada de Jamal revela onde ele aprendeu as respostas para os aparentemente impossíveis testes do programa. Mas uma pergunta permanece um mistério: o que é esse jovem sem desejo aparente de riqueza realmente ... Escrito por Fox Searchlight Pictures",
    "nota_avaliacao": "8,0",
    "genero": "Drama | Romance"
},
{
    "titulo": "Me Chame pelo Seu Nome",
    "ano_lancamento": "2017",
    "direcao": "Luca Guadagnino",
    "sinopse": "LIGUE-ME POR SEU NOME, o novo filme de Luca Guadagnino, é um conto sensual e transcendente do primeiro amor, baseado no aclamado romance de André Aciman. É o verão de 1983, no norte da Itália, e Elio Perlman (Timothée Chalamet), um jovem precoce de 17 anos, passa seus dias na villa do século XVII de sua família transcrevendo e tocando música clássica, lendo e flertando com sua amiga Marzia (Esther Garrel). Elio tem um relacionamento próximo com seu pai (Michael Stuhlbarg), um eminente professor especializado em cultura greco-romana, e sua mãe Annella (Amira Casar), tradutora, que o favorece com os frutos da alta cultura em um ambiente que transborda delícias naturais. Embora a sofisticação e os dotes intelectuais de Elio sugiram que ele já seja um adulto de pleno direito, ainda há muita coisa que permanece inocente e sem forma sobre ele, particularmente sobre assuntos do coração. Um dia, Oliver (Armie Hammer), um americano de 24 anos, estudante universitário trabalhando em seu ... Escrito por Sony Pictures Classics",
    "nota_avaliacao": "7,9",
    "genero": "Drama | Romance"
},
{
    "titulo": "Diário de uma Paixão",
    "ano_lancamento": "2004",
    "direcao": "Nick Cassavetes",
    "sinopse": "Em uma casa de repouso, o morador Duke lê uma história de romance para uma mulher idosa que tem demência senil com perda de memória. No final dos anos 30, a rica Allie Hamilton, de dezessete anos, passa as férias de verão em Seabrook. O trabalhador local Noah Calhoun conhece Allie em um carnaval e eles logo se apaixonam. Um dia, Noah leva Allie para uma casa antiga que ele sonha em comprar e restaurar e eles tentam fazer amor, mas são interrompidos por seu amigo. Os pais de Allie não aprovam o romance, já que Noah pertence a outra classe social e se mudam para Nova York com ela. Noah escreve 365 cartas (Um ano) para Allie, mas sua mãe Anne Hamilton não as entrega à filha. Três anos depois, os Estados Unidos se juntam à Segunda Guerra Mundial e Noah e seu melhor amigo Fin se alistam no exército, e Allie trabalha como enfermeira do exército. Ela conhece o soldado ferido Lon Hammond no hospital. Depois da guerra, eles se reencontram em encontros e depois Lon, que é rico e ... Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "nota_avaliacao": "7,8",
    "genero": "Drama | Romance"
},
{
    "titulo": "Titanic",
    "ano_lancamento": "1997",
    "direcao": "James cameron",
    "sinopse": "84 anos depois, uma mulher de 100 anos chamada Rose DeWitt Bukater conta a história de sua neta Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell e Anatoly Mikailavich no Keldysh sobre sua vida em 10 de abril de 1912, em um navio chamado Titanic quando a jovem Rose embarca no navio de partida com os passageiros da classe alta e sua mãe, Ruth DeWitt Bukater, e seu noivo, Caledon Hockley. Enquanto isso, um vagabundo e artista chamado Jack Dawson e seu melhor amigo Fabrizio De Rossi ganham bilhetes de terceira classe para o navio em um jogo. E ela explica toda a história desde a partida até a morte do Titanic em sua primeira e última viagem em 15 de abril de 1912 às 2:20 da manhã. Escrito por Anthony Pereyra <hypersonic91@yahoo.com>",
    "nota_avaliacao": "7,8",
    "genero": "Drama | Romance"
},
{
    "titulo": "A Culpa é das Estrelas",
    "ano_lancamento": "2014",
    "direcao": "Josh Boone",
    "sinopse": "Hazel e Augustus são dois adolescentes que compartilham um humor aflitivo, um desdém pelo convencional e um amor que os varre em uma jornada. O relacionamento deles é ainda mais milagroso, já que o outro companheiro constante de Hazel é um tanque de oxigênio, Gus brinca sobre sua perna protética, e eles se conhecem e se apaixonam em um grupo de apoio ao câncer.",
    "nota_avaliacao": "7,7",
    "genero": "Drama | Romance"
},
{
    "titulo": "Nasce uma Estrela",
    "ano_lancamento": "2018",
    "direcao": "Bradley Cooper",
    "sinopse": "O músico experiente Jackson Maine (Bradley Cooper) descobre e se apaixona pelo artista lutador Ally (Gaga). Ela quase desistiu de seu sonho de torná-lo grande como cantora - até Jack persuadi-la aos holofotes. Mas mesmo quando a carreira de Ally decola, o lado pessoal de seu relacionamento está se deteriorando, enquanto Jack luta uma batalha contínua com seus próprios demônios internos. Escrito por Warner Bros.",
    "nota_avaliacao": "7,7",
    "genero": "Drama  | música  | Romance"
},
{
    "titulo": "O Lado Bom da Vida",
    "ano_lancamento": "2012",
    "direcao": "David O. Russell",
    "sinopse": "Contra orientação médica e sem o conhecimento de seu marido, Pat Solatano Sr., o cuidado de Dolores Solatano dispensa seu filho adulto, Pat Solatano Jr., de uma instituição de saúde mental de Maryland depois que seu tribunal mínimo de oito meses ordenou uma restrição. A condição do lançamento inclui Pat Jr. se mudar de volta com seus pais em sua casa na Filadélfia. Embora a institucionalização de Pat Jr. tenha sido devido a ele espancar o amante de sua esposa Nikki, ele foi diagnosticado com transtorno bipolar. Nikki o deixou e recebeu uma ordem de restrição contra ele. Embora ele esteja tomando medicamentos (o que ele não toma por causa da maneira como ele se sente) e tenha sessões de terapia obrigatórias, Pat Jr. sente que só pode administrar o exterior vivendo de maneira saudável e procurando os 'revestimentos de prata'. na vida dele. Seus objetivos são recuperar o antigo emprego de professor substituto, mas o mais importante é reunir-se com Nikki. Ele acha que existem certos casos em que ele não lida bem, mas não menos do que isso ... Escrito por Huggo",
    "nota_avaliacao": "7,7",
    "genero": "Comedy | Drama | Romance"
},
{
    "titulo": "Como Eu Era Antes de Você",
    "ano_lancamento": "2016",
    "direcao": "Thea Sharrock",
    "sinopse": "Lou Clark sabe muitas coisas. Ela sabe quantos passos existem entre o ponto de ônibus e a casa. Ela sabe que gosta de trabalhar na loja de chá The Buttered Bun e sabe que pode não amar o namorado Patrick. O que Lou não sabe é que ela está prestes a perder o emprego ou que saber o que está por vir é o que a mantém sã. Will Traynor sabe que um acidente de carro acabou com seu desejo de viver. Ele sabe que tudo parece muito pequeno e sem alegria agora e sabe exatamente como vai acabar com isso. O que Will não sabe é que Lou está prestes a invadir seu mundo em uma profusão de cores. E nenhum deles sabe que vai se mudar o tempo todo. Escrito por nattattck-11",
    "nota_avaliacao": "7,4",
    "genero": "Drama | Romance"
},
{
    "titulo": "Um Amor para Recordar",
    "ano_lancamento": "2002",
    "direcao": "Adam Shankman",
    "sinopse": "Na Carolina do Norte, especialmente em Beaufort, uma brincadeira com um cara dá errado e coloca o aluno na clínica. Carter, um estudante famoso sem planos para o futuro, é responsabilizado e forçado a participar de atividades de serviço comunitário depois da escola, como conseqüência, que incluem estrelar como protagonista da peça. E participando dessas atividades está Jamie Sullivan, a filha do reverendo que tem grandes ambições e nada em comum com Landon. Quando Landon decide que quer levar suas atividades a sério, ele pede ajuda a Jamie e começa a passar a maior parte do tempo com ela. Mas ele começa a gostar dela, o que não esperava fazer. Eles se relacionam, para grande desgosto dos velhos amigos populares de Landon e do estrito reverendo pai de Jamie. Mas quando um segredo de partir o coração se torna conhecido e coloca seu relacionamento à prova, Escrito por Pjshipman",
    "nota_avaliacao": "7,4",
    "genero": "Drama | Romance"
},
{
    "titulo": "Diamante de Sangue",
    "ano_lancamento": "2006",
    "direcao": "Edward Zwick",
    "sinopse": "Uma história que segue Archer, um homem torturado por suas raízes. Com um forte instinto de sobrevivência, ele se tornou um ator-chave no negócio de diamantes de conflito. A agitação política é galopante na Serra Leoa enquanto as pessoas lutam dente por dente. Ao conhecer Salomão e a bela Maddy, a vida de Archer muda para sempre, pois ele tem a chance de fazer as pazes com a guerra ao seu redor. Escrito por Miist",
    "nota_avaliacao": "8,0",
    "genero": "Aventura  | Drama  | Suspense"
},
{
    "titulo": "Cisne Negro",
    "ano_lancamento": "2010",
    "direcao": "Darren Aronofsky",
    "sinopse": "Nina (Portman) é uma bailarina de uma companhia de balé da cidade de Nova York cuja vida, como todos os de sua profissão, é completamente consumida pela dança. Ela mora com sua obsessiva ex-bailarina, mãe Erica (Hershey), que exerce um controle sufocante sobre ela. Quando o diretor artístico Thomas Leroy (Cassel) decide substituir a prima bailarina Beth MacIntyre (Ryder) pela produção de abertura de sua nova temporada, Swan Lake, Nina é sua primeira escolha. Mas Nina tem concorrência: uma nova dançarina, Lily (Kunis), que também impressiona Leroy. O Lago dos Cisnes exige um dançarino que possa interpretar o Cisne Branco  com inocência e graça, e o Cisne Negro, que representa dolo e sensualidade. Nina se encaixa perfeitamente no papel de Cisne Branco, mas Lily é a personificação do Cisne Negro. Como os dois jovens dançarinos expandem sua rivalidade em uma amizade distorcida, Escrito por Fox Searchlight Pictures",
    "nota_avaliacao": "8,0",
    "genero": "Drama  | Suspense"
},
{
    "titulo": "Sin City: A Cidade do Pecado",
    "ano_lancamento": "2005",
    "direcao": "Robert Miller , Frank Miller",
    "sinopse": "Quatro histórias de crime adaptadas dos quadrinhos populares de Frank Miller, focando-se em um bruto musculoso que procura a pessoa responsável pela morte de seu amado Goldie, um homem farto da polícia corrupta de Sin City que toma a lei em suas próprias mãos depois de um erro horrível, um policial que arrisca sua vida para proteger uma garota de um pedófilo deformado e um assassino procurando ganhar um pouco de dinheiro. Escrito por Tom Benton",
    "nota_avaliacao": "8,0",
    "genero": "Crime  | Suspense"
},
{
    "titulo": "Jogo Mortal",
    "ano_lancamento": "1972",
    "direcao": "Joseph L. Mankiewicz",
    "sinopse": "Andrew Wyke é um famoso e bem-sucedido autor de romances policiais. Milo Tindle chega até ele com um pedido estranho, de que o Sr. Wyke se divorcie de sua esposa para que Tindle possa se casar com ela. Wyke não está particularmente perturbado com isso, ele e sua esposa se separaram e ele está tendo um caso com outra mulher, mas usa a reunião e o pedido de Tindle como uma chance de jogar um jogo, um jogo com consequências potencialmente mortais . Escrito por doações",
    "nota_avaliacao": "8,0",
    "genero": "Mistério  | Suspense"
},
{
    "titulo": "O Abutre",
    "ano_lancamento": "2014",
    "direcao": "Dan Gilroy",
    "sinopse": "NIGHTCRAWLER é um thriller que se passa no ventre noturno da contemporânea Los Angeles. Jake Gyllenhaal é Lou Bloom, um jovem impaciente desesperado por trabalho que descobre o mundo de alta velocidade do jornalismo criminal de Los Angeles. Ao encontrar um grupo de equipes de filmagem freelancers que filmam acidentes, incêndios, assassinatos e outros caos, Lou entra na garganta cortada, reino perigoso de caça noturna - onde cada sirene da polícia lida é igual a um possível lucro inesperado e as vítimas são convertidas em dólares e centavos. Ajudado por Rene Russo como Nina, uma veterana do esporte de sangue que é notícia na TV local, Lou confunde a linha entre observador e participante para se tornar a estrela de sua própria história. Escrito por Open Road Films",
    "nota_avaliacao": "7,9",
    "genero": "Crime  | Drama  | Suspense"
},
{
    "titulo": "Filhos da Esperança",
    "ano_lancamento": "2006",
    "direcao": "Alfonso Cuarón",
    "sinopse": "Londres, 2027. Neste mundo distópico, os seres humanos são incapazes de se reproduzir há dezoito anos por uma razão desconhecida, significando a extinção iminente da espécie. A Grã-Bretanha é a única sociedade civilizada remanescente no planeta, o que resultou em pessoas que desejam imigrar para lá. Como tal, tornou-se um estado policial para lidar com os imigrantes, que são colocados em campos de refugiados. O humilde burocrata do governo Theo Faron, uma vez ativista, é abordado pelos Fishes, considerado um grupo terrorista, liderado por sua ex-esposa Julian Taylor, que ele não vê há quase vinte anos, seu casamento que se desintegrou após a morte de seus filho Dylan durante a pandemia de gripe de 2008. Embora os peixes usassem meios terroristas em sua contínua revolução contra o Estado na luta pelos direitos dos imigrantes, Julian promete que agora eles ganham apoio apenas conversando com as pessoas. O que ela quer é que Theo use suas conexões para obter documentos de trânsito para um jovem imigrante ... Escrito por Huggo",
    "nota_avaliacao": "7,9",
    "genero": "Drama  | Ficção científica  | Suspense"
},
{
    "titulo": "O Apartamento",
    "ano_lancamento": "2016",
    "direcao": "Asghar Farhadi",
    "sinopse": "Forçados a deixar sua casa em colapso, Ranaa e Emad, um casal iraniano que ensaia para 'Death of a Salesman', de Arthur Miller, aluga um apartamento novo de um de seus colegas. Sem saber que o inquilino anterior era uma mulher de má reputação e com muitos clientes, eles se acalmam. Em uma reviravolta desagradável, um dos clientes faz uma visita ao apartamento uma noite, enquanto Ranaa fica sozinha em casa tomando banho e o resultado muda a vida pacífica do casal de cabeça para baixo. Escrito por Hossein sr",
    "nota_avaliacao": "7,8",
    "genero": "Drama  | Suspense"
},
{
    "titulo": "Capitão Phillips",
    "ano_lancamento": "2013",
    "direcao": "Paul Greengrass",
    "sinopse": "O capitão Phillips é um exame em várias camadas do sequestro de 2009 do navio porta-contêineres americano Maersk Alabama por uma tripulação de piratas somalis. É - através das lentes distintivas do diretor Paul Greengrass - simultaneamente um thriller de pulsação e um retrato complexo dos inúmeros efeitos da globalização. O filme foca no relacionamento entre o comandante do Alabama, o capitão Richard Phillips (duas vezes vencedor do Oscar® Tom Hanks) e o capitão de pirata da Somália, Muse (Barkhad Abdi), que o leva como refém. Phillips e Muse estão em rota de colisão imparável quando Muse e sua tripulação miram na nave desarmada de Phillips; no impasse que se seguiu, a 145 milhas da costa da Somália, os dois homens estarão à mercê de forças fora de seu controle.",
    "nota_avaliacao": "7,8",
    "genero": "Biografia  | Drama  | Suspense"
},
{
    "titulo": "Gravidade",
    "ano_lancamento": "2013",
    "direcao": "Alfonso Cuarón",
    "sinopse": "Ryan Stone ( Sandra Bullock ) é uma brilhante engenheira médica em sua primeira missão de ônibus espacial, com o astronauta veterano Matt Kowalski ( George Clooney ) no comando de seu último vôo antes de se aposentar. Mas em uma caminhada espacial aparentemente rotineira, ocorre um desastre. O ônibus espacial é destruído, deixando Stone e Kowalsky completamente sozinhos - amarrados a nada além de um ao outro e espiralando na escuridão. Escrito por MuTaTeD",
    "nota_avaliacao": "7,7",
    "genero": "Drama  | Ficção científica  | Suspense"
},
{
    
    "titulo": "Ponte dos Espiões",
    "ano_lancamento": "2015",
    "direcao": "Steven Spielberg",
    "sinopse": "Na Guerra Fria, um advogado, James B. Donovan, é recrutado pela CIA e envolvido em uma intensa missão de negociação para liberar e trocar um piloto de avião espião da CIA U-2, Francis G. Powers. O piloto foi preso vivo depois que seu avião foi abatido pela União Soviética durante uma missão e permanece na companhia de um oficial de inteligência da KGB, Rudolf Abel, que foi preso por espionagem nos EUA. Escrito por Gusde",
    "nota_avaliacao": "7,6",
    "genero": "Drama  | Histórico  | Suspense"
},
{
    "titulo": "Invocação do Mal",
    "ano_lncamento": "2013",
    "direcao": "James Wan",
    "sinopse": "Em 1971, Carolyn e Roger Perron mudam sua família para uma casa de fazenda degradada em Rhode Island e logo coisas estranhas começam a acontecer ao redor dela com um terror crescente de pesadelos. Em desespero, Carolyn entra em contato com os notáveis ​​investigadores paranormais, Ed e Lorraine Warren, para examinar a casa. O que os Warrens descobrem é uma área inteira mergulhada em uma assombração satânica que agora está direcionada à família Perron, aonde quer que eles vão. Para acabar com esse mal, os Warrens terão que recorrer a todas as suas habilidades e força espiritual para derrotar essa ameaça espectral em sua origem, que ameaça destruir todos os envolvidos. Escrito por Kenneth Chisholm (kchishol@rogers.com)",
    "nota_avaliacao": "7,5",
    "genero": "Terror  | mistério  | Suspense"
},
{
    "titulo": "O Lamento",
    "ano_lncamento": "2016",
    "direcao": "Hong-jin Na",
    "sinopse": "Na pequena vila de Goksung, na Coréia do Sul, o policial Jong-Goo investiga assassinatos bizarros causados ​​por uma doença misteriosa. Seu parceiro transmite fofocas de que um estrangeiro japonês, que mora em uma casa isolada nas montanhas, seria um espírito maligno responsável pela doença. Jong-Goo decide visitar o estranho junto com seu parceiro e um jovem padre que fala japonês. Eles encontram um altar com cabeça de cabra, quadros nas paredes das pessoas infectadas que morreram e um cão de guarda atacante que impede sua partida até que o estrangeiro chegue. Jong-Goo encontra um sapato de sua amada filha, Hyo-jin, na casa do estranho, e logo ela fica doente. Sua sogra convoca o xamã Il-gwang para salvar sua neta, enquanto uma mulher misteriosa diz a Jong-Goo que o estranho é o responsável. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "nota_avaliacao": "7,4",
    "genero": "Terror  | mistério  | Suspense"
},
{
    "titulo": It: "A Coisa",
    "ano_lncamento": "2017",
    "direcao": "Andy Muschietti",
    "sinopse": "Na cidade de Derry, as crianças locais estão desaparecendo uma a uma. Em um lugar conhecido como 'Os Sertões', um grupo de sete crianças se une por seus horríveis e estranhos encontros com um palhaço do mal e sua determinação em matá-lo. Escrito por Emma Chapman",
    "nota_avaliacao": "7,4",
    "genero": "Terror"
},
{
    
    "titulo": "Fragmentado",
    "ano_lncamento": "2016",
    "direcao": "M. Night Shyamalan",
    "sinopse": "Embora Kevin (James McAvoy) tenha evidenciado 23 personalidades para seu psiquiatra de confiança, Dr. Fletcher (Betty Buckley), ainda resta um submerso que deve materializar e dominar todos os outros. Compelido a sequestrar três adolescentes lideradas pelo observador voluntário Casey, Kevin entra em uma guerra pela sobrevivência entre todos os que estão nele - e todos ao seu redor - enquanto as paredes entre seus compartimentos se quebram. Escrito por alexanderfire-00074",
    "nota_avaliacao": "7,3",
    "genero": "Terror  | Suspense"
},
{
    "titulo": "Invocação do Mal 2",
    "ano_lncamento": "2016",
    "direcao": "James Wan",
    "sinopse": "Em 1977, os investigadores paranormais Ed e Lorraine Warren viajam para Londres, Inglaterra, onde a mãe solteira Peggy Hodgson acredita que algo de mal está em sua casa. Quando a filha mais nova de Peggy começa a mostrar sinais de possessão demoníaca, Ed e Lorraine tentam ajudar a garota sitiada, apenas para se encontrarem alvejados pelos espíritos maliciosos. Escrito por ahmetkozan",
    "nota_avaliacao": "7,3",
    "genero": "Terror  | mistério  | Suspense"
},
{
    "titulo": "O Segredo da Cabana",
    "ano_lncamento": "2011",
    "direcao": "Drew Goddard",
    "sinopse": "Cinco adolescentes partem para um fim de semana em uma cabana isolada na floresta. Eles chegam e descobrem que estão bastante isolados, sem meios de se comunicar com o mundo exterior. Quando a porta do porão se abre, eles naturalmente descem para investigar. Eles encontram uma variedade estranha de relíquias e curiosidades, mas quando uma das mulheres, Dana, lê um livro, ela acorda uma família de assassinos de zumbis mortais. No entanto, há muito mais acontecendo do que aparenta. Escrito por garykmcd",
    "nota_avaliacao": "7,0",
    "genero": "Terror"
},
{
    "titulo": "Cloverfield: Monstro",
    "ano_lncamento": "2008",
    "direcao": "Matt Reeves",
    "sinopse": "Para comemorar a promoção maciça de Rob, sua amante, Beth e seus amigos, decidem fazer uma festa surpresa de despedida, agora que ele está prestes a se mudar para o Japão. No entanto, uma explosão ensurdecedora e a chegada de uma enorme criatura escamosa e grosseira interromperão abruptamente as festividades, enquanto todo o inferno se abre em Nova York, e a Estátua da Liberdade é decapitada. À medida que o gigante reptiliano se aproxima de Manhattan, começa uma corrida ousada para resgatar Beth, enquanto, ao mesmo tempo, tudo é gravado através das lentes de uma câmera de vídeo portátil, em meio a caos e destruição. No final, de onde veio esse implacável invasor e, acima de tudo, há uma chance de sobrevivência? Enquanto eles vão investigar, uma aventura nas ruas de Nova York começa, enquanto os amigos estão determinados a resgatar o verdadeiro amor de Rob. Escrito por Nick Riganas",
    "nota_avaliacao": "7,0",
    "genero": "Terror  | Ficção científica  | Suspense"
},
{
    "titulo": "Nós",
    "ano_lncamento": "2019",
    "direcao": "Jordan Peele",
    "sinopse": "Para fugir de suas vidas ocupadas, a família Wilson tira férias para Santa Cruz, Califórnia, com o plano de passar um tempo com seus amigos, a família Tyler. Em um dia na praia, o jovem filho Jason quase se afasta, fazendo com que sua mãe Adelaide se proteja de sua família. Naquela noite, quatro pessoas misteriosas entram na casa de infância de Adelaide, onde estão hospedadas. A família fica chocada ao descobrir que os intrusos se parecem com eles, apenas com aparências grotescas. Escrito por jesusblack-30225",
    "nota_avaliacao": "6,9",
    "genero": "Terror  | mistério  | Suspense"

},
{
    "titulo": "A Órfã",
    "ano_lncamento": "2009",
    "direcao": "Jaume Collet-Serra",
    "sinopse": "Kate e John Coleman estão reconstruindo seu casamento problemático após a perda de seu bebê. O casal decide adotar um filho. Quando encontram Esther, de 9 anos, no orfanato de St. Marina, imediatamente se apaixonam pelo órfão bem educado. O filho deles, Daniel, é hostil à sua nova irmã, mas a filha surda e muda, Max, fica encantada com ela - a princípio. Eventualmente, Kate começa a sentir que Esther é manipuladora e possivelmente até psicologicamente danificada. John se recusa a ouvir as dúvidas de sua esposa. Kate liga para a irmã Abigail no orfanato, e a freira informa que Esther tem uma história conturbada e misteriosa. Kate investiga ainda mais o passado de Esther e descobre que ela não é o que parece ser. Escrito por lisakoffler1967@gmail.com",
    "nota_avaliacao": "6,9",
    "genero": "Terror  | mistério  | Suspense"
},
{
    "titulo": "A Bruxa",
    "ano_lncamento": "2015",
    "direcao": "Robert Eggers",
    "sinopse": "Nova Inglaterra, 1630: William e Katherine tentam levar uma vida cristã devota, vivendo à beira de um deserto intransitável, com cinco filhos. Quando o filho recém-nascido desaparece misteriosamente e suas colheitas fracassam, a família começa a se ligar. 'The Witch' é um retrato arrepiante de uma família se desenrolando dentro de seus próprios pecados, deixando-os presa de um mal inconcebível.",
    "nota_avaliacao": "6,8",
    "genero": "Terror  | Mistério"
}];

const salvarItens = async () => {
    await require('./db');

    for (let i = 0; i < itens.length; i++){
        await Item.create(itens[i]);
    }
};

salvarItens();