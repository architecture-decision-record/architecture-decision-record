# Architecture Decision Record: API gamit ang JSON kontra gRPC

## Katayuan

Tinanggap

## Konteksto

Nagdidisenyo kami ng API para sa bagong serbisyo na gagamitin ng maraming client. Isinasaalang-alang namin ang dalawang opsyon sa pagpapatupad ng API: ang paggamit ng JSON sa HTTP o ang paggamit ng gRPC.

Ang JSON sa HTTP ay malawakang ginagamit na pamamaraan sa pagbuo ng mga API, at sinusuportahan ito ng maraming programming language at framework. Simple, magaan, at madaling unawain ang pamamaraang ito, kaya magandang pagpipilian ito para sa maraming proyekto. Gayunpaman, maaari itong maging mas hindi mahusay kaysa sa ibang opsyon, lalo na pagdating sa paghawak ng malaking dami ng data.

Ang gRPC naman ay mas bagong teknolohiya na nag-aalok ng mas mahusay na paraan ng pagbuo ng mga API. Gumagamit ito ng binary serialization para maglipat ng data, na maaaring mas mabilis at mas siksik kaysa sa paggamit ng JSON. Sinusuportahan din ng gRPC ang bidirectional streaming, kaya magandang pagpipilian ito para sa mga real-time na application.

## Desisyon

Matapos isaalang-alang ang mga pakinabang at disbentaha ng parehong opsyon, nagpasya kaming gamitin ang gRPC para sa aming API. Bagama't mas simpleng opsyon ang JSON sa HTTP, naniniwala kaming magbibigay ang gRPC ng mas mahusay at scalable na solusyon para sa aming serbisyo. Inaasahan din naming hahawak ang aming API ng malaking dami ng data, at mas magiging mahusay ang binary serialization ng gRPC para sa kasong ito.

Bukod dito, naniniwala kaming magiging kapaki-pakinabang ang suporta ng gRPC sa bidirectional streaming para sa mga real-time na application na maaari naming buuin sa hinaharap.

## Mga Kahihinatnan

Sa pagpili ng gRPC, kailangan naming gumamit ng ibang hanay ng mga tool at library para buuin ang aming API kumpara sa paggamit ng JSON sa HTTP. Maaaring mangailangan ito ng karagdagang oras at pagsisikap para pag-aralan at ipatupad ang mga teknolohiyang ito. Bukod pa rito, kailangang gumamit ng mga library na compatible sa gRPC ang mga client na gustong gumamit ng aming API, na maaaring hindi kasing-lawak ang suporta kumpara sa mga library ng JSON sa HTTP.

Gayunpaman, naniniwala kaming mas matimbang ang mga benepisyo ng paggamit ng gRPC kaysa sa mga posibleng disbentaheng ito, at kumpiyansa kaming magreresulta ang desisyong ito sa mas mahusay at scalable na API.
