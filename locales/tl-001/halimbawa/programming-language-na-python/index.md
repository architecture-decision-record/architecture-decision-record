# Architecture Decision Record: Programming language na Python

## Konteksto

Kailangan naming magpasya kung gagamitin ang Python bilang programming language para sa aming proyekto. Kasangkot sa aming proyekto ang data analysis, machine learning, at web development.

## Desisyon

Nagpasya kaming gamitin ang Python bilang pangunahing programming language para sa aming proyekto.

## Rasyonal

Ang Python ay maraming-gamit na programming language na malawakang ginagamit sa mga larangan ng data analysis, machine learning, at web 
development. Ito ay interpreted na wika, na nangangahulugang hindi ito kailangang i-compile, at may syntax itong madaling basahin at unawain. Kabilang sa iba pang mahahalagang salik sa aming desisyon ang sumusunod:

1. **Availability ng mga library:** May napakalaking koleksyon ang Python ng mga library at framework, tulad ng NumPy, Pandas, at Scikit-learn, na nagpapadali sa mga developer na magpatupad ng mga algorithm sa machine learning at data analysis.

2. **Suporta ng komunidad:** May malaki at aktibong komunidad ng mga developer ang Python na nag-aambag sa pagbuo nito at nagbibigay ng suporta at gabay sa iba't ibang forum at website. Pinadadali nito para sa mga baguhan ang paghanap ng tulong at pag-aaral ng wika.

3. **Scalability:** Scalable ang Python, na nangangahulugang kaya nitong hawakan ang malalaking dataset at masalimuot na application. Magagamit din ito sa mabilis na prototyping o pagbuo ng maliliit na application nang may kaunting pagsisikap, kaya mas madali para sa amin ang magsimula ng aming proyekto at mabilis na mag-iterate.

4. **Flexibility:** Magagamit ang Python sa iba't ibang uri ng proyekto, kasama ang web development, scientific computing, machine learning, atbp. Compatible din ito sa ibang programming language, tulad ng Java at C++, na nagpapadali sa pag-integrate sa ibang sistema.

## Mga Kahihinatnan

May ilang posibleng kahihinatnan sa paggamit ng Python bilang aming programming language, tulad ng:

1. **Performance:** Maaaring mas mabagal ang Python kaysa sa mga compiled na wika tulad ng C++ pagdating sa pagpapatupad ng ilang algorithm, ngunit mababawasan ito sa paggamit ng mga optimized na library o pagsulat ng kritikal na code sa C++ at pag-interface dito gamit ang Python.

2. **Learning curve:** Bagama't madaling matutunan ang syntax ng Python, maaaring mahirap pag-aralan ang mga best practice sa pagsulat ng mahusay at scalable na code. Malalampasan ito sa pamamagitan ng pagsunod sa mga kumbensyon, paggamit ng mga framework at library, at paghingi ng gabay mula sa mga bihasang developer.

3. **Compatibility ng bersyon:** Maaaring magkaiba ang syntax at kakayahan ng iba't ibang bersyon ng Python, na maaaring magpahirap sa pagpapanatili at pag-update ng mga proyekto. Mahalagang pumili ng bersyon ng Python na malawakang sinusuportahan at compatible sa mga requirement ng aming proyekto.

## Konklusyon

Matapos isaalang-alang ang mga pakinabang at disbentaha ng paggamit ng Python bilang aming programming language, napagpasyahan naming ito ang pinakamahusay na pagpipilian para sa aming proyekto. Naniniwala kaming ibibigay nito sa amin ang pinakamalaking flexibility, availability ng mga library, at suporta ng komunidad, habang nananatiling scalable at madaling umangkop sa nagbabago naming mga pangangailangan.

<h6>Kredito: ang pahinang ito ay binuo ng ChatGPT, pagkatapos ay inedit para sa kalinawan at format.</h6>
