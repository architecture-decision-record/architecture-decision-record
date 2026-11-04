# Architecture Decision Record: Pagpili ng Teknolohiya ng Database

## Katayuan

Tinanggap

## Konteksto

Nagdidisenyo kami ng bagong application na nangangailangan ng pag-iimbak at pagkuha ng data sa scalable at mahusay-ang-performance na paraan. Natukoy namin ang tatlong uri ng teknolohiya ng database na karaniwang ginagamit: mga relational database, mga document database, at mga event database.

Ang mga relational database ay nag-iimbak ng data sa mga talahanayang may nakapirming schema at nagpapatupad ng mahigpit na limitasyon sa integridad ng data. Angkop ang mga ito sa mga application na nangangailangan ng masalimuot na ugnayan ng data at mga transaksyon. Kabilang sa mga halimbawa ang MySQL, PostgreSQL, at Oracle.

Ang mga document database ay nag-iimbak ng data sa mga dokumentong tulad ng JSON at walang schema. Angkop na angkop ang mga ito sa mga application na nangangailangan ng flexible na data model at horizontal na pag-scale. Kabilang sa mga halimbawa ang MongoDB, Couchbase, at Amazon DynamoDB.

Ang mga event database ay nag-iimbak ng data bilang serye ng mga event, na nagtatala ng bawat pagbabago sa data. Angkop ang mga ito sa mga application na nangangailangan ng auditing, event sourcing, at masalimuot na pagproseso ng data. Kabilang sa mga halimbawa ang Apache Kafka, Apache Pulsar, at AWS Kinesis.
Desisyon

Matapos maingat na suriin ang mga requirement at limitasyon ng aming application, nagpasya kaming gumamit ng document database.

## Rasyonal

Pinili namin ang document database dahil:

1. Nangangailangan ang aming application ng flexible na data model na maaaring umunlad sa paglipas ng panahon. Pinahihintulutan kami ng mga document database na mag-imbak ng data sa format na walang schema, na nangangahulugang makapagdaragdag kami ng mga bagong field o mababago ang estruktura ng mga umiiral na dokumento nang hindi kailangang baguhin ang schema ng database.

2. Kailangang mag-scale nang pahalang ang aming application para mahawakan ang malaking dami ng data at trapiko. Nagbibigay ang mga document database ng built-in na suporta sa sharding at replication, na nagpapahintulot sa aming ipamahagi ang data sa maraming server at mahawakan ang mataas na read at write throughput.

3. Nangangailangan ang aming application ng mabilis at mahusay na pagkuha ng data. Nagbibigay ang mga document database ng makapangyarihang kakayahan sa indexing at pag-query na nagpapahintulot sa aming kumuha ng data nang mabilis at mahusay.

4. Hindi nangangailangan ang aming application ng masalimuot na transaksyon o ugnayan ng data. Bagama't mahusay ang mga relational database sa pagpapatupad ng mga limitasyon sa integridad ng data at paghawak ng masalimuot na transaksyon, wala ang aming application ng ganoong mga requirement. Kayang magbigay ng mga document database ng sapat na garantiya sa consistency at durability para sa aming gamit.

## Mga Kahihinatnan

Sa pagpili ng document database, kailangan naming mamuhunan sa pag-aaral at pag-unawa sa partikular na teknolohiyang pipiliin naming gamitin. Bukod pa rito, kailangan naming tiyaking maayos na umaakma ang data model ng aming application sa data model ng document database para mapakinabangan ang performance at scalability.

Gayunpaman, naniniwala kaming mas matimbang ang mga benepisyo ng paggamit ng document database kaysa sa mga gastos, at ito ang pinakaangkop sa mga requirement at limitasyon ng aming application.
