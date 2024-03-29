export let mockedDB = {
	funcionarios: [
		{
			name: 'John Doe',
			id: '1',
			results: {
				reflexão: 81.25,
				sentimentalismo: 56.25,
				altruismo: 56.25,
				autoAceitacao: 56.25,
				autoconfianca: 37.5,
				autoDirecionamento: 56.25,
				empatia: 50,
				espiritualidade: 37.25,
				extravagancia: 56.25,
				flexibilidadeObjetivos: 18.75,
				frater: 68.75,
				idealismo: 37.5,
				identificacaoPessoal: 31.25,
				independenciaEmocional: 43.75,
				inibicao: 43.75,
				medoIncerteza: 81.25,
				necessidadeConquista: 56.25,
				ordem: 37.5,
				otimismo: 18.75,
				persistencia: 75,
				procrastinacao: 18.75
			},
			resultadosTexto: {
				reflexão:
					'Uma alta pontuação aponta para pessoas bastante reflexivas que tendem a se conter para analisar diversos fatores antes de se posicionarem sobre um determinado tema. Não se impressionam rapidamente e não se deixam influenciar com poucas informações. No entanto quando tomam uma decisão essa costuma ser mais firme por ser bem embasada. Apresentam uma facilidade em focar sobre um tema que seja agradável ao pensamento e podem criar teorias inovadoras e revolucionárias. Apesar de ser uma característica muito útil dois pontos devem ser considerados: primeiro- a reflexão pode não ser tão embasada quanto à pessoa pensa e corre-se o risco de se fechar em posições inflexíveis e que não sejam realmente as melhores; segundo- se associado a altos níveis de medo da incerteza, procrastinação e baixos níveis de otimismo podemos ter uma paralisia importante diante da análise.',
				sentimentalismo:
					'Pessoas nesse grupo oscilam entre a razão e a emoção de forma equilibrada no dia a dia. Situações extremas podem deixar os sentimentos mais em evidência ou podem bloquear os sentidos para pensar de forma mais prática. Essa resposta varia da situação vivenciada e deve considerar traços temperamentais específicos. Por exemplo: casos que envolvem integridade física podem apresentar respostas emocionais antagônicas a aquelas vivenciadas em relações afetivas de cunho sexual. O preparo e as crenças subjacentes influenciarão na qualidade dessa resposta.',
				altruismo:
					'A maioria das pessoas se compadece do sofrimento alheio e se dispõe a ajudar. No entanto isso não se torna regra de vida. Muitas vezes é colocado condições para essa ajuda. Esse equilíbrio evita um maior desprendimento e permite uma perspectiva que preserva a pessoa de maiores explorações.',
				autoAceitacao:
					'Pontuação média mostra uma auto-aceitação parcial e dependente do grau de ameaça exterior. Podem negar alguns defeitos se forem em pontos muito sensíveis. Podem surpreender bastante quando arriscam e descobrem-se mais capazes do que pensavam.',
				autoconfianca:
					'Muitas vezes pessoas com baixa autoconfiança se menosprezam por crenças disfuncionais que formaram. Assim acabam não se esforçando, colhem fracassos e alimentam um circuito vicioso de desesperança. Acabam dependendo das outras pessoas para lhes ajudarem com freqüência. Todavia essa baixa autoconfiança não precisa ser perene. É importante um trabalho sobre a Persistência e o Autodirecionamento para incrementar essa característica.',
				autoDirecionamento:
					'O nível médio percebe que algumas coisas não dependem apenas dele. O grande segredo é realmente diferenciar o que é passível de agir e o que é fruto da sorte e acaso.',
				empatia:
					'Compreendem parcialmente os sentimentos alheios. A atitude de se colocar no lugar do outro ocorre apenas em situações favoráveis, pois em momentos de crise priorizam os próprios interesses. Podem até considerar outras opiniões, mas dão prioridade a versões que sejam mais adequadas as suas crenças.',
				espiritualidade:
					'Ateus e racionalistas se enquadram nesse grupo. São pessoas que não acreditam em nada de cunho transcendental. Misticismo aqui é visto como superstição e a ciência e a lógica são as bússolas que orientam esse grupo. Diante dos sofrimentos e de situações injustas e de difícil explicação são desafiados a manter a crença no caos e no acaso.',
				extravagancia:
					'Pessoas com pontuação média em extravagância oscilam entre a expressividade e a reserva. Os níveis de inibição social, otimismo, ambição e autoconfiança se relacionam com as flutuações na extravagância nesse grupo. Essa atenção ao momento vivido é fundamental para não se deixar levar por emoções que possam gerar arrependimento.',
				flexibilidadeObjetivos:
					'Pessoas que prezam por uma honestidade radical são caracteristicamente inflexíveis. Não estão dispostas a tudo para conseguir o que querem e consideram muito as convenções sociais. Prezam pela justiça e equilíbrio e transmitem confiança e credibilidade. Tratam as demais pessoas com cordialidade e respeito. Por serem escravos da lei podem ser vítimas de ambientes que apresentam exigências danosas. São bastante suscetíveis a serem manipulados pelo regulamento e mesmo quando prejudicados por essa inflexibilidade preferem manter a “consciência limpa” do que quebrar as regras.',
				frater:
					'Pessoas altamente fraternais fazem questão de ter muitos amigos. Estabelecem vínculos afetivos com facilidade. Gostam de conversar e expor detalhes de suas vidas. São vistos como cordiais e agradáveis. Tendem a ser muito queridos porque geram relações de amizade bem calorosas. Atraem pessoas com traços semelhantes assim como aqueles com baixa Independência. Podem se prejudicar com a falta de privacidade e o excesso de exposição. Costumam esperar muito das pessoas. O fato de confiarem em demasia pode trazer dois problemas: primeiro- pessoas oportunistas podem se aproveitar da boa vontade dessas pessoas; segundo- podem sofrer com uma demanda excessiva dos amigos caso não consigam estabelecer limites.',
				idealismo:
					'Pessoas sem um sentido claro na vida e que não fazem planos bem estabelecidos para o futuro. Podem ser bastante imediatistas e instáveis. Problemas importantes ocorrem quando a rotina é alterada de forma brusca. Sofrem por um excesso de instabilidade de valores. Podem sentir uma sensação crônica de vazio. Ganham em maleabilidade e dificilmente se tornam fanáticos em algo. Assim apresentam ferramentas que de maneira interessante pode questionar determinadas crenças e valores.',
				identificacaoPessoal:
					'Níveis baixos mostram pessoas individualistas e pragmáticas. Em geral têm pouca afinidade com trabalhos em grupo e não vivenciam sensações de pertencerem a algo maior. Costumam ser mais racionais e muito práticos. Podem não se adequar bem em ambientes menos lógicos.',
				independenciaEmocional:
					'Algumas pessoas acreditam que são mais independentes do que ocorre na prática. Pois se por um lado não dependem excessivamente de uma pessoa definida podem por outro lado ser reféns da aprovação social. O nível adequado de independência é bem melhor avaliado no longo prazo, pois traumas passados podem ter construído mecanismos de defesa para negar maiores apegos. Aqui a auto-aceitação é fundamental. Claro que a maioria das pessoas está nesse grupo de dependência média, mas é preciso considerar que o meio em que se vive pode gerar uma pressão para aparentar maior independência.',
				inibicao:
					'Níveis médios em geral indicam pessoas que não sofrem ansiedade importante em situações públicas porém podem também ter uma maior dificuldade em ser assertivos. Conseguem expor suas opiniões e queixas mas isso é proporcional a intimidade das pessoas com quem se relacionam. É necessário correlacionar esse resultado com o nível de frater.',
				medoIncerteza:
					'Uma pontuação alta mostra um cuidado excessivo com situações novas. Pessoas com essa característica em geral evitam correr riscos e sentem-se muito desconfortáveis com mudanças na rotina. Uma sensação de vulnerabilidade pode surgir diante de incertezas gerando alterações emocionais defensivas. Por outro lado toleram muito bem a rotina e não costumam sofrer com o tédio. Valorizam as situações mais familiares e corriqueiras, pois trazem segurança. A estabilidade em hábitos e pensamentos pode gerar uma boa credibilidade, pois passa a imagem de alguém previsível o que facilita a confiança por parte das outras pessoas.',
				necessidadeConquista:
					'Pontuações médias podem indicar pessoas que oscilam entre ambição e comodismo conforme o estímulo e o meio. Porém uma atenção diferenciada deve existir aqui: algumas pessoas para evitar a frustração tendem a minimizar seus níveis reais de ambição e tentam se adaptar negando suas vontades. É muito importante avaliar o nível de Auto-direcionamento para não encarar problemas futuros com essa atitude.',
				ordem:
					'Uma baixa pontuação sugere indivíduos vistos caracteristicamente como rebeldes. São pessoas que não gostam de regras. Preferem as coisas ao seu próprio modo e muitas vezes irritam-se quando contrariados. Não se submetem facilmente a autoridades e nem a regulamentos. Paradoxalmente muitos buscam posições de liderança. Em muitos existe uma marcante indisciplina com prejuízos em várias esferas da vida. Quando a desorganização pessoal é muito evidente tendem a ser demasiadamente subestimados. Esse comportamento opositor pode ser útil como crítica ao modelo de organização vigente e evidenciar ao grupo regras gerais que talvez sejam danosas. Um vislumbre diferenciado sobre a liberdade e uma conformidade social alternativa também são benefícios que pessoas com essa característica conseguem.',
				otimismo:
					'Cautela e preocupação ao extremo, mesmo quando diante de situações de pequeno risco. Na verdade a vida como um todo é marcada por medo de perdas e inseguranças quanto ao futuro. Muitas vezes existe uma negação da clara tendência pessimista, pois a forma como essa pessoa encara a realidade parece a ela ser a mais correta e muitas vezes os otimistas são vistos por essas pessoas como inconseqüentes. As falhas e as humilhações do passado são sempre revisitadas para justificar as crenças. Apesar dos altos níveis de ansiedade, que geram um sofrimento recorrente, existe um grande sentimento de realização quando suas previsões adversas se cumprem e o dano pressentido foi evitado. Existe uma clara habilidade em achar falhas e problemas, mas é importante exercitar um filtro para usar desse potencial sem ser paralisado pela angústia.',
				persistencia:
					'Preferem os trabalhos difíceis e complexos. Não se satisfazem com o fácil. Não desistem em meio aos problemas e persistem bem mais que a maioria, chegando a se sacrificar em alguns momentos apenas para ter sucesso. As críticas não atrapalham e são usadas como motivação para continuar. Mas podem desanimar quando chegam ao ápice e perdem o prazer do desafio por isso acabam não gostando de atividades com muita rotina. Podem chegar a fazer coisas grandiosas se essa Persistência for relacionado a sua Necessidade de Conquista. Costumam ser perfeccionistas. Conseguem chegar longe pela dedicação diferenciada, mas podem perder coisas em outras áreas importantes pela “teimosia”. Os níveis de Auto-aceitação, Autoconfiança e Autodirecionamento têm de ser bem conhecidos e estratégias gerais devem ser desenvolvidas para não se dedicarem demais em situações de pouco retorno gerando muito “esforço inútil”.',
				procrastinacao:
					'Algumas pessoas não demoram a iniciar o que deve ser feito. Pelo contrário, costumam agir muitas vezes rapidamente e em alguns casos nem refletem sobre os objetivos e meios do trabalho. Realizam mais por estarem em maior movimento, mas não fazem necessariamente os melhores trabalhos pois não tem obrigatoriamente a excelência como foco. A satisfação aqui ocorre por cumprir as etapas. Se coincidir de ter uma pontuação alta em Ordem pode se tornar refém de regras e regulamentos pouco produtivos e se sobrecarregar com isso.'
			}
		},
		{
			name: 'Mariana Jane',
			id: '2',
			results: {
				reflexão: 10,
				sentimentalismo: 20,
				altruismo: 25.5,
				autoAceitacao: 55,
				autoconfianca: 90,
				autoDirecionamento: 34,
				empatia: 87,
				espiritualidade: 14.7,
				extravagancia: 12.8,
				flexibilidadeObjetivos: 10.9,
				frater: 50.7,
				idealismo: 1,
				identificacaoPessoal: 18.9,
				independenciaEmocional: 55.8,
				inibicao: 10.7,
				medoIncerteza: 38.9,
				necessidadeConquista: 87.2,
				ordem: 69,
				otimismo: 35.5,
				persistencia: 77,
				procrastinacao: 29.4
			},
			resultadosTexto: {
				reflexão:
					'Uma alta pontuação aponta para pessoas bastante reflexivas que tendem a se conter para analisar diversos fatores antes de se posicionarem sobre um determinado tema. Não se impressionam rapidamente e não se deixam influenciar com poucas informações. No entanto quando tomam uma decisão essa costuma ser mais firme por ser bem embasada. Apresentam uma facilidade em focar sobre um tema que seja agradável ao pensamento e podem criar teorias inovadoras e revolucionárias. Apesar de ser uma característica muito útil dois pontos devem ser considerados: primeiro- a reflexão pode não ser tão embasada quanto à pessoa pensa e corre-se o risco de se fechar em posições inflexíveis e que não sejam realmente as melhores; segundo- se associado a altos níveis de medo da incerteza, procrastinação e baixos níveis de otimismo podemos ter uma paralisia importante diante da análise.',
				sentimentalismo:
					'Pessoas nesse grupo oscilam entre a razão e a emoção de forma equilibrada no dia a dia. Situações extremas podem deixar os sentimentos mais em evidência ou podem bloquear os sentidos para pensar de forma mais prática. Essa resposta varia da situação vivenciada e deve considerar traços temperamentais específicos. Por exemplo: casos que envolvem integridade física podem apresentar respostas emocionais antagônicas a aquelas vivenciadas em relações afetivas de cunho sexual. O preparo e as crenças subjacentes influenciarão na qualidade dessa resposta.',
				altruismo:
					'A maioria das pessoas se compadece do sofrimento alheio e se dispõe a ajudar. No entanto isso não se torna regra de vida. Muitas vezes é colocado condições para essa ajuda. Esse equilíbrio evita um maior desprendimento e permite uma perspectiva que preserva a pessoa de maiores explorações.',
				autoAceitacao:
					'Pontuação média mostra uma auto-aceitação parcial e dependente do grau de ameaça exterior. Podem negar alguns defeitos se forem em pontos muito sensíveis. Podem surpreender bastante quando arriscam e descobrem-se mais capazes do que pensavam.',
				autoconfianca:
					'Muitas vezes pessoas com baixa autoconfiança se menosprezam por crenças disfuncionais que formaram. Assim acabam não se esforçando, colhem fracassos e alimentam um circuito vicioso de desesperança. Acabam dependendo das outras pessoas para lhes ajudarem com freqüência. Todavia essa baixa autoconfiança não precisa ser perene. É importante um trabalho sobre a Persistência e o Autodirecionamento para incrementar essa característica.',
				autoDirecionamento:
					'O nível médio percebe que algumas coisas não dependem apenas dele. O grande segredo é realmente diferenciar o que é passível de agir e o que é fruto da sorte e acaso.',
				empatia:
					'Compreendem parcialmente os sentimentos alheios. A atitude de se colocar no lugar do outro ocorre apenas em situações favoráveis, pois em momentos de crise priorizam os próprios interesses. Podem até considerar outras opiniões, mas dão prioridade a versões que sejam mais adequadas as suas crenças.',
				espiritualidade:
					'Ateus e racionalistas se enquadram nesse grupo. São pessoas que não acreditam em nada de cunho transcendental. Misticismo aqui é visto como superstição e a ciência e a lógica são as bússolas que orientam esse grupo. Diante dos sofrimentos e de situações injustas e de difícil explicação são desafiados a manter a crença no caos e no acaso.',
				extravagancia:
					'Pessoas com pontuação média em extravagância oscilam entre a expressividade e a reserva. Os níveis de inibição social, otimismo, ambição e autoconfiança se relacionam com as flutuações na extravagância nesse grupo. Essa atenção ao momento vivido é fundamental para não se deixar levar por emoções que possam gerar arrependimento.',
				flexibilidadeObjetivos:
					'Pessoas que prezam por uma honestidade radical são caracteristicamente inflexíveis. Não estão dispostas a tudo para conseguir o que querem e consideram muito as convenções sociais. Prezam pela justiça e equilíbrio e transmitem confiança e credibilidade. Tratam as demais pessoas com cordialidade e respeito. Por serem escravos da lei podem ser vítimas de ambientes que apresentam exigências danosas. São bastante suscetíveis a serem manipulados pelo regulamento e mesmo quando prejudicados por essa inflexibilidade preferem manter a “consciência limpa” do que quebrar as regras.',
				frater:
					'Pessoas altamente fraternais fazem questão de ter muitos amigos. Estabelecem vínculos afetivos com facilidade. Gostam de conversar e expor detalhes de suas vidas. São vistos como cordiais e agradáveis. Tendem a ser muito queridos porque geram relações de amizade bem calorosas. Atraem pessoas com traços semelhantes assim como aqueles com baixa Independência. Podem se prejudicar com a falta de privacidade e o excesso de exposição. Costumam esperar muito das pessoas. O fato de confiarem em demasia pode trazer dois problemas: primeiro- pessoas oportunistas podem se aproveitar da boa vontade dessas pessoas; segundo- podem sofrer com uma demanda excessiva dos amigos caso não consigam estabelecer limites.',
				idealismo:
					'Pessoas sem um sentido claro na vida e que não fazem planos bem estabelecidos para o futuro. Podem ser bastante imediatistas e instáveis. Problemas importantes ocorrem quando a rotina é alterada de forma brusca. Sofrem por um excesso de instabilidade de valores. Podem sentir uma sensação crônica de vazio. Ganham em maleabilidade e dificilmente se tornam fanáticos em algo. Assim apresentam ferramentas que de maneira interessante pode questionar determinadas crenças e valores.',
				identificacaoPessoal:
					'Níveis baixos mostram pessoas individualistas e pragmáticas. Em geral têm pouca afinidade com trabalhos em grupo e não vivenciam sensações de pertencerem a algo maior. Costumam ser mais racionais e muito práticos. Podem não se adequar bem em ambientes menos lógicos.',
				independenciaEmocional:
					'Algumas pessoas acreditam que são mais independentes do que ocorre na prática. Pois se por um lado não dependem excessivamente de uma pessoa definida podem por outro lado ser reféns da aprovação social. O nível adequado de independência é bem melhor avaliado no longo prazo, pois traumas passados podem ter construído mecanismos de defesa para negar maiores apegos. Aqui a auto-aceitação é fundamental. Claro que a maioria das pessoas está nesse grupo de dependência média, mas é preciso considerar que o meio em que se vive pode gerar uma pressão para aparentar maior independência.',
				inibicao:
					'Níveis médios em geral indicam pessoas que não sofrem ansiedade importante em situações públicas porém podem também ter uma maior dificuldade em ser assertivos. Conseguem expor suas opiniões e queixas mas isso é proporcional a intimidade das pessoas com quem se relacionam. É necessário correlacionar esse resultado com o nível de frater.',
				medoIncerteza:
					'Uma pontuação alta mostra um cuidado excessivo com situações novas. Pessoas com essa característica em geral evitam correr riscos e sentem-se muito desconfortáveis com mudanças na rotina. Uma sensação de vulnerabilidade pode surgir diante de incertezas gerando alterações emocionais defensivas. Por outro lado toleram muito bem a rotina e não costumam sofrer com o tédio. Valorizam as situações mais familiares e corriqueiras, pois trazem segurança. A estabilidade em hábitos e pensamentos pode gerar uma boa credibilidade, pois passa a imagem de alguém previsível o que facilita a confiança por parte das outras pessoas.',
				necessidadeConquista:
					'Pontuações médias podem indicar pessoas que oscilam entre ambição e comodismo conforme o estímulo e o meio. Porém uma atenção diferenciada deve existir aqui: algumas pessoas para evitar a frustração tendem a minimizar seus níveis reais de ambição e tentam se adaptar negando suas vontades. É muito importante avaliar o nível de Auto-direcionamento para não encarar problemas futuros com essa atitude.',
				ordem:
					'Uma baixa pontuação sugere indivíduos vistos caracteristicamente como rebeldes. São pessoas que não gostam de regras. Preferem as coisas ao seu próprio modo e muitas vezes irritam-se quando contrariados. Não se submetem facilmente a autoridades e nem a regulamentos. Paradoxalmente muitos buscam posições de liderança. Em muitos existe uma marcante indisciplina com prejuízos em várias esferas da vida. Quando a desorganização pessoal é muito evidente tendem a ser demasiadamente subestimados. Esse comportamento opositor pode ser útil como crítica ao modelo de organização vigente e evidenciar ao grupo regras gerais que talvez sejam danosas. Um vislumbre diferenciado sobre a liberdade e uma conformidade social alternativa também são benefícios que pessoas com essa característica conseguem.',
				otimismo:
					'Cautela e preocupação ao extremo, mesmo quando diante de situações de pequeno risco. Na verdade a vida como um todo é marcada por medo de perdas e inseguranças quanto ao futuro. Muitas vezes existe uma negação da clara tendência pessimista, pois a forma como essa pessoa encara a realidade parece a ela ser a mais correta e muitas vezes os otimistas são vistos por essas pessoas como inconseqüentes. As falhas e as humilhações do passado são sempre revisitadas para justificar as crenças. Apesar dos altos níveis de ansiedade, que geram um sofrimento recorrente, existe um grande sentimento de realização quando suas previsões adversas se cumprem e o dano pressentido foi evitado. Existe uma clara habilidade em achar falhas e problemas, mas é importante exercitar um filtro para usar desse potencial sem ser paralisado pela angústia.',
				persistencia:
					'Preferem os trabalhos difíceis e complexos. Não se satisfazem com o fácil. Não desistem em meio aos problemas e persistem bem mais que a maioria, chegando a se sacrificar em alguns momentos apenas para ter sucesso. As críticas não atrapalham e são usadas como motivação para continuar. Mas podem desanimar quando chegam ao ápice e perdem o prazer do desafio por isso acabam não gostando de atividades com muita rotina. Podem chegar a fazer coisas grandiosas se essa Persistência for relacionado a sua Necessidade de Conquista. Costumam ser perfeccionistas. Conseguem chegar longe pela dedicação diferenciada, mas podem perder coisas em outras áreas importantes pela “teimosia”. Os níveis de Auto-aceitação, Autoconfiança e Autodirecionamento têm de ser bem conhecidos e estratégias gerais devem ser desenvolvidas para não se dedicarem demais em situações de pouco retorno gerando muito “esforço inútil”.',
				procrastinacao:
					'Algumas pessoas não demoram a iniciar o que deve ser feito. Pelo contrário, costumam agir muitas vezes rapidamente e em alguns casos nem refletem sobre os objetivos e meios do trabalho. Realizam mais por estarem em maior movimento, mas não fazem necessariamente os melhores trabalhos pois não tem obrigatoriamente a excelência como foco. A satisfação aqui ocorre por cumprir as etapas. Se coincidir de ter uma pontuação alta em Ordem pode se tornar refém de regras e regulamentos pouco produtivos e se sobrecarregar com isso.'
			}
		},
		{
			name: 'Francisca Silva',
			id: '3',
			results: {
				reflexão: 78,
				sentimentalismo: 80,
				altruismo: 10,
				autoAceitacao: 13,
				autoconfianca: 12.5,
				autoDirecionamento: 36.5,
				empatia: 81,
				espiritualidade: 9,
				extravagancia: 70,
				flexibilidadeObjetivos: 47,
				frater: 98,
				idealismo: 89,
				identificacaoPessoal: 4.9,
				independenciaEmocional: 18.5,
				inibicao: 12,
				medoIncerteza: 20.5,
				necessidadeConquista: 89,
				ordem: 65.3,
				otimismo: 10.2,
				persistencia: 47.7,
				procrastinacao: 37.8
			},
			resultadosTexto: {
				reflexão:
					'Uma alta pontuação aponta para pessoas bastante reflexivas que tendem a se conter para analisar diversos fatores antes de se posicionarem sobre um determinado tema. Não se impressionam rapidamente e não se deixam influenciar com poucas informações. No entanto quando tomam uma decisão essa costuma ser mais firme por ser bem embasada. Apresentam uma facilidade em focar sobre um tema que seja agradável ao pensamento e podem criar teorias inovadoras e revolucionárias. Apesar de ser uma característica muito útil dois pontos devem ser considerados: primeiro- a reflexão pode não ser tão embasada quanto à pessoa pensa e corre-se o risco de se fechar em posições inflexíveis e que não sejam realmente as melhores; segundo- se associado a altos níveis de medo da incerteza, procrastinação e baixos níveis de otimismo podemos ter uma paralisia importante diante da análise.',
				sentimentalismo:
					'Pessoas nesse grupo oscilam entre a razão e a emoção de forma equilibrada no dia a dia. Situações extremas podem deixar os sentimentos mais em evidência ou podem bloquear os sentidos para pensar de forma mais prática. Essa resposta varia da situação vivenciada e deve considerar traços temperamentais específicos. Por exemplo: casos que envolvem integridade física podem apresentar respostas emocionais antagônicas a aquelas vivenciadas em relações afetivas de cunho sexual. O preparo e as crenças subjacentes influenciarão na qualidade dessa resposta.',
				altruismo:
					'A maioria das pessoas se compadece do sofrimento alheio e se dispõe a ajudar. No entanto isso não se torna regra de vida. Muitas vezes é colocado condições para essa ajuda. Esse equilíbrio evita um maior desprendimento e permite uma perspectiva que preserva a pessoa de maiores explorações.',
				autoAceitacao:
					'Pontuação média mostra uma auto-aceitação parcial e dependente do grau de ameaça exterior. Podem negar alguns defeitos se forem em pontos muito sensíveis. Podem surpreender bastante quando arriscam e descobrem-se mais capazes do que pensavam.',
				autoconfianca:
					'Muitas vezes pessoas com baixa autoconfiança se menosprezam por crenças disfuncionais que formaram. Assim acabam não se esforçando, colhem fracassos e alimentam um circuito vicioso de desesperança. Acabam dependendo das outras pessoas para lhes ajudarem com freqüência. Todavia essa baixa autoconfiança não precisa ser perene. É importante um trabalho sobre a Persistência e o Autodirecionamento para incrementar essa característica.',
				autoDirecionamento:
					'O nível médio percebe que algumas coisas não dependem apenas dele. O grande segredo é realmente diferenciar o que é passível de agir e o que é fruto da sorte e acaso.',
				empatia:
					'Compreendem parcialmente os sentimentos alheios. A atitude de se colocar no lugar do outro ocorre apenas em situações favoráveis, pois em momentos de crise priorizam os próprios interesses. Podem até considerar outras opiniões, mas dão prioridade a versões que sejam mais adequadas as suas crenças.',
				espiritualidade:
					'Ateus e racionalistas se enquadram nesse grupo. São pessoas que não acreditam em nada de cunho transcendental. Misticismo aqui é visto como superstição e a ciência e a lógica são as bússolas que orientam esse grupo. Diante dos sofrimentos e de situações injustas e de difícil explicação são desafiados a manter a crença no caos e no acaso.',
				extravagancia:
					'Pessoas com pontuação média em extravagância oscilam entre a expressividade e a reserva. Os níveis de inibição social, otimismo, ambição e autoconfiança se relacionam com as flutuações na extravagância nesse grupo. Essa atenção ao momento vivido é fundamental para não se deixar levar por emoções que possam gerar arrependimento.',
				flexibilidadeObjetivos:
					'Pessoas que prezam por uma honestidade radical são caracteristicamente inflexíveis. Não estão dispostas a tudo para conseguir o que querem e consideram muito as convenções sociais. Prezam pela justiça e equilíbrio e transmitem confiança e credibilidade. Tratam as demais pessoas com cordialidade e respeito. Por serem escravos da lei podem ser vítimas de ambientes que apresentam exigências danosas. São bastante suscetíveis a serem manipulados pelo regulamento e mesmo quando prejudicados por essa inflexibilidade preferem manter a “consciência limpa” do que quebrar as regras.',
				frater:
					'Pessoas altamente fraternais fazem questão de ter muitos amigos. Estabelecem vínculos afetivos com facilidade. Gostam de conversar e expor detalhes de suas vidas. São vistos como cordiais e agradáveis. Tendem a ser muito queridos porque geram relações de amizade bem calorosas. Atraem pessoas com traços semelhantes assim como aqueles com baixa Independência. Podem se prejudicar com a falta de privacidade e o excesso de exposição. Costumam esperar muito das pessoas. O fato de confiarem em demasia pode trazer dois problemas: primeiro- pessoas oportunistas podem se aproveitar da boa vontade dessas pessoas; segundo- podem sofrer com uma demanda excessiva dos amigos caso não consigam estabelecer limites.',
				idealismo:
					'Pessoas sem um sentido claro na vida e que não fazem planos bem estabelecidos para o futuro. Podem ser bastante imediatistas e instáveis. Problemas importantes ocorrem quando a rotina é alterada de forma brusca. Sofrem por um excesso de instabilidade de valores. Podem sentir uma sensação crônica de vazio. Ganham em maleabilidade e dificilmente se tornam fanáticos em algo. Assim apresentam ferramentas que de maneira interessante pode questionar determinadas crenças e valores.',
				identificacaoPessoal:
					'Níveis baixos mostram pessoas individualistas e pragmáticas. Em geral têm pouca afinidade com trabalhos em grupo e não vivenciam sensações de pertencerem a algo maior. Costumam ser mais racionais e muito práticos. Podem não se adequar bem em ambientes menos lógicos.',
				independenciaEmocional:
					'Algumas pessoas acreditam que são mais independentes do que ocorre na prática. Pois se por um lado não dependem excessivamente de uma pessoa definida podem por outro lado ser reféns da aprovação social. O nível adequado de independência é bem melhor avaliado no longo prazo, pois traumas passados podem ter construído mecanismos de defesa para negar maiores apegos. Aqui a auto-aceitação é fundamental. Claro que a maioria das pessoas está nesse grupo de dependência média, mas é preciso considerar que o meio em que se vive pode gerar uma pressão para aparentar maior independência.',
				inibicao:
					'Níveis médios em geral indicam pessoas que não sofrem ansiedade importante em situações públicas porém podem também ter uma maior dificuldade em ser assertivos. Conseguem expor suas opiniões e queixas mas isso é proporcional a intimidade das pessoas com quem se relacionam. É necessário correlacionar esse resultado com o nível de frater.',
				medoIncerteza:
					'Uma pontuação alta mostra um cuidado excessivo com situações novas. Pessoas com essa característica em geral evitam correr riscos e sentem-se muito desconfortáveis com mudanças na rotina. Uma sensação de vulnerabilidade pode surgir diante de incertezas gerando alterações emocionais defensivas. Por outro lado toleram muito bem a rotina e não costumam sofrer com o tédio. Valorizam as situações mais familiares e corriqueiras, pois trazem segurança. A estabilidade em hábitos e pensamentos pode gerar uma boa credibilidade, pois passa a imagem de alguém previsível o que facilita a confiança por parte das outras pessoas.',
				necessidadeConquista:
					'Pontuações médias podem indicar pessoas que oscilam entre ambição e comodismo conforme o estímulo e o meio. Porém uma atenção diferenciada deve existir aqui: algumas pessoas para evitar a frustração tendem a minimizar seus níveis reais de ambição e tentam se adaptar negando suas vontades. É muito importante avaliar o nível de Auto-direcionamento para não encarar problemas futuros com essa atitude.',
				ordem:
					'Uma baixa pontuação sugere indivíduos vistos caracteristicamente como rebeldes. São pessoas que não gostam de regras. Preferem as coisas ao seu próprio modo e muitas vezes irritam-se quando contrariados. Não se submetem facilmente a autoridades e nem a regulamentos. Paradoxalmente muitos buscam posições de liderança. Em muitos existe uma marcante indisciplina com prejuízos em várias esferas da vida. Quando a desorganização pessoal é muito evidente tendem a ser demasiadamente subestimados. Esse comportamento opositor pode ser útil como crítica ao modelo de organização vigente e evidenciar ao grupo regras gerais que talvez sejam danosas. Um vislumbre diferenciado sobre a liberdade e uma conformidade social alternativa também são benefícios que pessoas com essa característica conseguem.',
				otimismo:
					'Cautela e preocupação ao extremo, mesmo quando diante de situações de pequeno risco. Na verdade a vida como um todo é marcada por medo de perdas e inseguranças quanto ao futuro. Muitas vezes existe uma negação da clara tendência pessimista, pois a forma como essa pessoa encara a realidade parece a ela ser a mais correta e muitas vezes os otimistas são vistos por essas pessoas como inconseqüentes. As falhas e as humilhações do passado são sempre revisitadas para justificar as crenças. Apesar dos altos níveis de ansiedade, que geram um sofrimento recorrente, existe um grande sentimento de realização quando suas previsões adversas se cumprem e o dano pressentido foi evitado. Existe uma clara habilidade em achar falhas e problemas, mas é importante exercitar um filtro para usar desse potencial sem ser paralisado pela angústia.',
				persistencia:
					'Preferem os trabalhos difíceis e complexos. Não se satisfazem com o fácil. Não desistem em meio aos problemas e persistem bem mais que a maioria, chegando a se sacrificar em alguns momentos apenas para ter sucesso. As críticas não atrapalham e são usadas como motivação para continuar. Mas podem desanimar quando chegam ao ápice e perdem o prazer do desafio por isso acabam não gostando de atividades com muita rotina. Podem chegar a fazer coisas grandiosas se essa Persistência for relacionado a sua Necessidade de Conquista. Costumam ser perfeccionistas. Conseguem chegar longe pela dedicação diferenciada, mas podem perder coisas em outras áreas importantes pela “teimosia”. Os níveis de Auto-aceitação, Autoconfiança e Autodirecionamento têm de ser bem conhecidos e estratégias gerais devem ser desenvolvidas para não se dedicarem demais em situações de pouco retorno gerando muito “esforço inútil”.',
				procrastinacao:
					'Algumas pessoas não demoram a iniciar o que deve ser feito. Pelo contrário, costumam agir muitas vezes rapidamente e em alguns casos nem refletem sobre os objetivos e meios do trabalho. Realizam mais por estarem em maior movimento, mas não fazem necessariamente os melhores trabalhos pois não tem obrigatoriamente a excelência como foco. A satisfação aqui ocorre por cumprir as etapas. Se coincidir de ter uma pontuação alta em Ordem pode se tornar refém de regras e regulamentos pouco produtivos e se sobrecarregar com isso.'
			}
		}
	],
	resultadosTextoDefault: {
		reflexão:
			'Uma alta pontuação aponta para pessoas bastante reflexivas que tendem a se conter para analisar diversos fatores antes de se posicionarem sobre um determinado tema. Não se impressionam rapidamente e não se deixam influenciar com poucas informações. No entanto quando tomam uma decisão essa costuma ser mais firme por ser bem embasada. Apresentam uma facilidade em focar sobre um tema que seja agradável ao pensamento e podem criar teorias inovadoras e revolucionárias. Apesar de ser uma característica muito útil dois pontos devem ser considerados: primeiro- a reflexão pode não ser tão embasada quanto à pessoa pensa e corre-se o risco de se fechar em posições inflexíveis e que não sejam realmente as melhores; segundo- se associado a altos níveis de medo da incerteza, procrastinação e baixos níveis de otimismo podemos ter uma paralisia importante diante da análise.',
		sentimentalismo:
			'Pessoas nesse grupo oscilam entre a razão e a emoção de forma equilibrada no dia a dia. Situações extremas podem deixar os sentimentos mais em evidência ou podem bloquear os sentidos para pensar de forma mais prática. Essa resposta varia da situação vivenciada e deve considerar traços temperamentais específicos. Por exemplo: casos que envolvem integridade física podem apresentar respostas emocionais antagônicas a aquelas vivenciadas em relações afetivas de cunho sexual. O preparo e as crenças subjacentes influenciarão na qualidade dessa resposta.',
		altruismo:
			'A maioria das pessoas se compadece do sofrimento alheio e se dispõe a ajudar. No entanto isso não se torna regra de vida. Muitas vezes é colocado condições para essa ajuda. Esse equilíbrio evita um maior desprendimento e permite uma perspectiva que preserva a pessoa de maiores explorações.',
		autoAceitacao:
			'Pontuação média mostra uma auto-aceitação parcial e dependente do grau de ameaça exterior. Podem negar alguns defeitos se forem em pontos muito sensíveis. Podem surpreender bastante quando arriscam e descobrem-se mais capazes do que pensavam.',
		autoconfianca:
			'Muitas vezes pessoas com baixa autoconfiança se menosprezam por crenças disfuncionais que formaram. Assim acabam não se esforçando, colhem fracassos e alimentam um circuito vicioso de desesperança. Acabam dependendo das outras pessoas para lhes ajudarem com freqüência. Todavia essa baixa autoconfiança não precisa ser perene. É importante um trabalho sobre a Persistência e o Autodirecionamento para incrementar essa característica.',
		autoDirecionamento:
			'O nível médio percebe que algumas coisas não dependem apenas dele. O grande segredo é realmente diferenciar o que é passível de agir e o que é fruto da sorte e acaso.',
		empatia:
			'Compreendem parcialmente os sentimentos alheios. A atitude de se colocar no lugar do outro ocorre apenas em situações favoráveis, pois em momentos de crise priorizam os próprios interesses. Podem até considerar outras opiniões, mas dão prioridade a versões que sejam mais adequadas as suas crenças.',
		espiritualidade:
			'Ateus e racionalistas se enquadram nesse grupo. São pessoas que não acreditam em nada de cunho transcendental. Misticismo aqui é visto como superstição e a ciência e a lógica são as bússolas que orientam esse grupo. Diante dos sofrimentos e de situações injustas e de difícil explicação são desafiados a manter a crença no caos e no acaso.',
		extravagancia:
			'Pessoas com pontuação média em extravagância oscilam entre a expressividade e a reserva. Os níveis de inibição social, otimismo, ambição e autoconfiança se relacionam com as flutuações na extravagância nesse grupo. Essa atenção ao momento vivido é fundamental para não se deixar levar por emoções que possam gerar arrependimento.',
		flexibilidadeObjetivos:
			'Pessoas que prezam por uma honestidade radical são caracteristicamente inflexíveis. Não estão dispostas a tudo para conseguir o que querem e consideram muito as convenções sociais. Prezam pela justiça e equilíbrio e transmitem confiança e credibilidade. Tratam as demais pessoas com cordialidade e respeito. Por serem escravos da lei podem ser vítimas de ambientes que apresentam exigências danosas. São bastante suscetíveis a serem manipulados pelo regulamento e mesmo quando prejudicados por essa inflexibilidade preferem manter a “consciência limpa” do que quebrar as regras.',
		frater:
			'Pessoas altamente fraternais fazem questão de ter muitos amigos. Estabelecem vínculos afetivos com facilidade. Gostam de conversar e expor detalhes de suas vidas. São vistos como cordiais e agradáveis. Tendem a ser muito queridos porque geram relações de amizade bem calorosas. Atraem pessoas com traços semelhantes assim como aqueles com baixa Independência. Podem se prejudicar com a falta de privacidade e o excesso de exposição. Costumam esperar muito das pessoas. O fato de confiarem em demasia pode trazer dois problemas: primeiro- pessoas oportunistas podem se aproveitar da boa vontade dessas pessoas; segundo- podem sofrer com uma demanda excessiva dos amigos caso não consigam estabelecer limites.',
		idealismo:
			'Pessoas sem um sentido claro na vida e que não fazem planos bem estabelecidos para o futuro. Podem ser bastante imediatistas e instáveis. Problemas importantes ocorrem quando a rotina é alterada de forma brusca. Sofrem por um excesso de instabilidade de valores. Podem sentir uma sensação crônica de vazio. Ganham em maleabilidade e dificilmente se tornam fanáticos em algo. Assim apresentam ferramentas que de maneira interessante pode questionar determinadas crenças e valores.',
		identificacaoPessoal:
			'Níveis baixos mostram pessoas individualistas e pragmáticas. Em geral têm pouca afinidade com trabalhos em grupo e não vivenciam sensações de pertencerem a algo maior. Costumam ser mais racionais e muito práticos. Podem não se adequar bem em ambientes menos lógicos.',
		independenciaEmocional:
			'Algumas pessoas acreditam que são mais independentes do que ocorre na prática. Pois se por um lado não dependem excessivamente de uma pessoa definida podem por outro lado ser reféns da aprovação social. O nível adequado de independência é bem melhor avaliado no longo prazo, pois traumas passados podem ter construído mecanismos de defesa para negar maiores apegos. Aqui a auto-aceitação é fundamental. Claro que a maioria das pessoas está nesse grupo de dependência média, mas é preciso considerar que o meio em que se vive pode gerar uma pressão para aparentar maior independência.',
		inibicao:
			'Níveis médios em geral indicam pessoas que não sofrem ansiedade importante em situações públicas porém podem também ter uma maior dificuldade em ser assertivos. Conseguem expor suas opiniões e queixas mas isso é proporcional a intimidade das pessoas com quem se relacionam. É necessário correlacionar esse resultado com o nível de frater.',
		medoIncerteza:
			'Uma pontuação alta mostra um cuidado excessivo com situações novas. Pessoas com essa característica em geral evitam correr riscos e sentem-se muito desconfortáveis com mudanças na rotina. Uma sensação de vulnerabilidade pode surgir diante de incertezas gerando alterações emocionais defensivas. Por outro lado toleram muito bem a rotina e não costumam sofrer com o tédio. Valorizam as situações mais familiares e corriqueiras, pois trazem segurança. A estabilidade em hábitos e pensamentos pode gerar uma boa credibilidade, pois passa a imagem de alguém previsível o que facilita a confiança por parte das outras pessoas.',
		necessidadeConquista:
			'Pontuações médias podem indicar pessoas que oscilam entre ambição e comodismo conforme o estímulo e o meio. Porém uma atenção diferenciada deve existir aqui: algumas pessoas para evitar a frustração tendem a minimizar seus níveis reais de ambição e tentam se adaptar negando suas vontades. É muito importante avaliar o nível de Auto-direcionamento para não encarar problemas futuros com essa atitude.',
		ordem:
			'Uma baixa pontuação sugere indivíduos vistos caracteristicamente como rebeldes. São pessoas que não gostam de regras. Preferem as coisas ao seu próprio modo e muitas vezes irritam-se quando contrariados. Não se submetem facilmente a autoridades e nem a regulamentos. Paradoxalmente muitos buscam posições de liderança. Em muitos existe uma marcante indisciplina com prejuízos em várias esferas da vida. Quando a desorganização pessoal é muito evidente tendem a ser demasiadamente subestimados. Esse comportamento opositor pode ser útil como crítica ao modelo de organização vigente e evidenciar ao grupo regras gerais que talvez sejam danosas. Um vislumbre diferenciado sobre a liberdade e uma conformidade social alternativa também são benefícios que pessoas com essa característica conseguem.',
		otimismo:
			'Cautela e preocupação ao extremo, mesmo quando diante de situações de pequeno risco. Na verdade a vida como um todo é marcada por medo de perdas e inseguranças quanto ao futuro. Muitas vezes existe uma negação da clara tendência pessimista, pois a forma como essa pessoa encara a realidade parece a ela ser a mais correta e muitas vezes os otimistas são vistos por essas pessoas como inconseqüentes. As falhas e as humilhações do passado são sempre revisitadas para justificar as crenças. Apesar dos altos níveis de ansiedade, que geram um sofrimento recorrente, existe um grande sentimento de realização quando suas previsões adversas se cumprem e o dano pressentido foi evitado. Existe uma clara habilidade em achar falhas e problemas, mas é importante exercitar um filtro para usar desse potencial sem ser paralisado pela angústia.',
		persistencia:
			'Preferem os trabalhos difíceis e complexos. Não se satisfazem com o fácil. Não desistem em meio aos problemas e persistem bem mais que a maioria, chegando a se sacrificar em alguns momentos apenas para ter sucesso. As críticas não atrapalham e são usadas como motivação para continuar. Mas podem desanimar quando chegam ao ápice e perdem o prazer do desafio por isso acabam não gostando de atividades com muita rotina. Podem chegar a fazer coisas grandiosas se essa Persistência for relacionado a sua Necessidade de Conquista. Costumam ser perfeccionistas. Conseguem chegar longe pela dedicação diferenciada, mas podem perder coisas em outras áreas importantes pela “teimosia”. Os níveis de Auto-aceitação, Autoconfiança e Autodirecionamento têm de ser bem conhecidos e estratégias gerais devem ser desenvolvidas para não se dedicarem demais em situações de pouco retorno gerando muito “esforço inútil”.',
		procrastinacao:
			'Algumas pessoas não demoram a iniciar o que deve ser feito. Pelo contrário, costumam agir muitas vezes rapidamente e em alguns casos nem refletem sobre os objetivos e meios do trabalho. Realizam mais por estarem em maior movimento, mas não fazem necessariamente os melhores trabalhos pois não tem obrigatoriamente a excelência como foco. A satisfação aqui ocorre por cumprir as etapas. Se coincidir de ter uma pontuação alta em Ordem pode se tornar refém de regras e regulamentos pouco produtivos e se sobrecarregar com isso.'
	}
}
