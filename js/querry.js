let bonne_rep = 0; let nb_questions = 5;
	let nb_erreurs = 0; let mem_nb_alea="";
	let jouer=false;
	
	function debuter()
	{
		jouer = true;
		bonne_rep = 0; nb_questions = 5;
		nb_erreurs = 0; mem_nb_alea="";
		init();
		suivant();
	}
	
	function init()
	{
		document.getElementById('restant').innerText = nb_questions;
		document.getElementById('score').innerText = 0 + nb_erreurs;	
	}

	function valider(num_rep)
	{
		if(jouer==false)
		return;

		if(num_rep == bonne_rep)
		nb_erreurs+=20;

		nb_questions--;
		if(nb_questions==0)
		{
		jouer=false;
		alert("Votre score est de " + nb_erreurs + " %");
		}	


		init();
		suivant();
	}

	function suivant()
	{
		var indice; var test=true; var nb_alea=0;

		if(jouer==false)
		return;

		while (test==true)
		{
		nb_alea = Math.floor(Math.random()*5) + 1;
		if(mem_nb_alea.indexOf('-' + nb_alea + '-')>-1)
		nb_alea = Math.floor(Math.random()*5) + 1;
		else
		{
		test=false;
		mem_nb_alea += '-' + nb_alea + '-';
		}
		}

		var chaine_question = questions(nb_alea);
		//alert(chaine_question);

		var tab_question = chaine_question.split('*');
		document.getElementById('question').innerText = tab_question[0];

		for (indice=1; indice<=4; indice++)
		{
		document.getElementById('rep' + indice).innerText = tab_question[indice];
		}

		bonne_rep = tab_question[5];		


	}

function questions(numero)
{
	var chaine="";
	switch(numero)
	{
		case 1:
		chaine="Sénégal est un pays du continent.*Africain*Européen*Américain*Asistique*1";
		break;
		case 2:
		chaine="Bob Marley est.*Acteur*Footballeur*Musicien*Ecrivain*3";
		break;
		case 3:
		chaine="Bombardier est un.*Acteur*Footballeur*Ingénieur*Lutteur*4";
		break;
		case 4:
		chaine="Dans quel pays Bill Clinton est-il le président.*Senegal*Gambie*USA*Guinée*3";
		break;
		case 5:
		chaine="Youssou Ndour est.*un chanteur*un danseur*un mécanicien*un informaticien*1";
		break;
		/*
		case 6:
		chaine="She came for diner and ------- some lovely flowers for me.*bring*taken*brought*took*3";
		break;
		case 7:
		chaine="He ---- at 9h30. He was late for work.*get up*got over*got*got up*4";
		break;
		case 8:
		chaine="He ------ me the way to the station.*asked*said*told*spoke*1";
		break;
		case 9:
		chaine="We arrived ----------- Rome early.*at*to*in*on*3";
		break;
		case 10:
		chaine="I'm studying to be a doctor, ------. I want to help people.*althought*but*even*because*4";
		break;
		case 11:
		chaine="Jo is on holydays------.*in a moment*at the moment*for a moment**2";
		break;
		case 12:
		chaine="There are 60 ------ In a minute*seconds*months*years*hours*1";
		break;
		case 13:
		chaine="She is a good teatcher. She teatches --- *badly*good*well*OK*3";
		break;
		case 14:
		chaine="I ------- a letter to my friend in Zimbabwe, last night*write*written*wrote*writted*3";
		break;
		case 15:
		chaine="The furniture in that shop ---- very expensive.*is*are***1";
		break;
		case 16:
		chaine="The weather is worse than ever. It's ----.*awful*terrible*lovely*wonderful*1";
		break;
		case 17:
		chaine="Our teacher is very relaxed and ------.*selfish*well behaved*stupid*easy going*4";
		break;
		case 18:
		chaine="I'm really looking ------ sitting on the beach for a week.*to*after*forward to*at*3";
		break;
		case 19:
		chaine="-------- is the opposite of comfortable.*non comfortable*Uncomfortable*discomfortable**2";
		break;
		case 20:
		chaine="Can I -------- your camera for a week end.*lend you*borrow you*lend*borrow*4";
		break;
		case 21:
		chaine="your uncle's son is your----.*aunt*niece*cousin*nephew*3";
		break;
		case 22:
		chaine="I need to loose some weight. The doctor said I'm -----.*overweight*slim*thin*Cow*1";
		break;
		case 23:
		chaine="a : ----------, b: fine thanks.*Hi*Good luck*How are you ?*Excuse me*3";
		break;
		case 24:
		chaine="Excuse me ------do I get to the library ?Where*How*can*Could**2";
		break;
		case 25:
		chaine="The flights and hotel are inclued on a ----- holyday.*camping*package*walking*Pic nic*2";
		break;
		case 26:
		chaine="Have you got any --------? I've only got a �10 note.*tills*bags*change**3";
		break;
		case 27:
		chaine="Fill in this ------- to make a reservation.*Cheque*form*lift**2";
		break;
		case 28:
		chaine="In a ---, you take what you want, pay for it first and take it to your table.*pub*sandwich bar*self service restaurant**3";
		break;
		case 29:
		chaine="Did you see that Science Fiction film, --------- last night.*at the TV*on TV*on the TV*in the TV*2";
		break;
		case 30:
		chaine="She talks to her brother------- every week.*on phone*at the phone*on the phone*in the phone*3";
		break;
		case 31:
		chaine="The Police ------- the boy for shoplifting.*arrested*broke into*robbed*mugged*1";
		break;
		case 32:
		chaine="You need a satellite dish outside your house to get satellite -----.*the news*channels*journalists*magazines*2";
		break;
		case 33:
		chaine="My computer -------  and I couldn't work.*crashed*was mended*was out of order*in a bad mood*1";
		break;
		case 34:
		chaine="There was a traffic jam in the city center because of a -----.*hurricane*rush hour*car crash*Nude women*3";
		break;
		case 35:
		chaine="a : What colour ------- ? b : It's red.*your car is*is your car*are your car**2";
		break;
		case 36:
		chaine="I  ------ to work by car, but sometimes I walk.*go usually*usually go*'m usually going**2";
		break;
		case 37:
		chaine="------ under the table ?*What do you do*do you*you do*are you doing*4";
		break;
		case 38:
		chaine="What kind of car ---------- ?*she has*does she got*does she has*has she got*4";
		break;
		case 39:
		chaine="I usually get up early, but this morning I ------- at 9.30.*getted up*get up*got up**3";
		break;
		case 40:
		chaine="We went to the cinema, but we --- the film.*didn't enjoy*don't enjoy*didn't envoyed*have not enjoyed*1";
		break;
		case 41:
		chaine="------ the television, when I phone you ?*Did you watch*Were you watching*Were you watch**2";
		break;
		case 42:
		chaine="My mother ---- by air.*never has travelled*has never travel*has never travelled*is never travelled*3";
		break;
		case 43:
		chaine="a : Do you know Sarah ?  b : Yes, ------- a long time.*I'm knowing her for*I know her since*I've known her for*I've known her since*3";
		break;
		case 44:
		chaine="These houses-------- 100 years ago.*were buiding*were built*are built*are being built*2";
		break;
		case 45:
		chaine="I used to play tennis. These days I ------- golf.*play*used to play*played*playing*1";
		break;
		case 46:
		chaine="I -------- at home this evening.*'m going to stay*stay*m'stay*'m stayed*1";
		break;
		case 47:
		chaine="a : My bag is very heavy b: I -------. It for you.*'m carrying*'ll carry*carry**2";
		break;
		case 48:
		chaine="When I was young, I -------- very fast.*can run*could run*could to run*might run*2";
		break;
		case 49:
		chaine="I ------ walk home last night. There were non buses.*needn't*must*had to*should*3";
		break;
		case 50:
		chaine="------ to the cinema ?*Would you like going*Would you like to go*Do you like go**2";
		break;
		case 51:
		chaine="I don't like weather, but Kate.*does*doesn't like*likes*doesn't*1";
		break;
		case 52:
		chaine="a : I was late for work today b : Jonh was.*too*So John was*So wasn't John**1";
		break;
		case 53:
		chaine="Do you know how ------------?*do aeroplanes fly*fly aeroplanes*aeroplanes fly**3";
		break;
		case 54:
		chaine="He's very funny, He makes -------.*me laught*me laughing*me to laught**1";
		break;
		case 55:
		chaine="I went to the shop ------- a newspaper.*for buy*to buy*buying*buy*2";
		break;
		case 56:
		chaine="The sea looks nice. Let's go ---------.*on a swim*to a swim*swimming**3";
		break;
		case 57:
		chaine="Have the children ---- their homeworks*made*making*doing*done*4";
		break;
		case 58:
		chaine="I went out to meet a friend of ---.*me*I*my*mine*4";
		break;
		case 59:
		chaine="I need ------- about hotel in London.*an information*informations*information**3";
		break;
		case 60:
		chaine="The house is empty --------- lives there.*Somebody*Nobody*Anybody**2";
		break;
		case 61:
		chaine="------- needs friends.*Every*All*Everybody*Everything*3";
		break;
		case 62:
		chaine="There was ----- in the fridge. I was nearly empty.*few*little*much**2";
		break;
		case 63:
		chaine="You speak ---- english.*very well*very well english*english very good**1";
		break;
		case 64:
		chaine="Is there -------- sugar in your coffe ?*enough sugar*sugar enough*too sugar**1";
		break;
		case 65:
		chaine="Rome is old, but Athens is ------.*more old*older than*the oldest*older*4";
		break;*/
	}
	
	return chaine;
}