# Architecture Decision Record: Programming language na Rust

Numero ng Desisyon: AR-001

Pamagat ng Desisyon: Pag-aampon ng programming language na Rust

Petsa: Disyembre 1, 2021

Katayuan: Tinanggap

### Pahayag ng Problema

Habang patuloy kaming bumubuo ng mga software application, napansin naming lalong nagiging mahirap na pigilan ang mga posibleng kahinaan sa seguridad at maiwasan ang mga runtime error. Sa mga umiiral na programming language, tulad ng C at C++, patuloy kaming nakararanas ng mga isyu tulad ng buffer overflow, memory leak, at undefined behavior na humahantong sa pag-crash ng mga application. Kailangan namin ng programming language na nagbibigay ng garantiya sa memory safety at sapat na mahusay para suportahan ang mga application na kritikal sa performance.

### Mga Konsiderasyon

Ilang programming language ang dinisenyo upang tugunan ang mga umiiral na problema. Sa kanila, nakakuha ng malaking atensyon mula sa komunidad ng mga developer ang programming language na Rust dahil sa natatanging mga katangian ng disenyo nito. Kabilang sa mga konsiderasyon ang;

1. Memory safety at seguridad

2. Performance at kahusayan

3. Suporta at pag-aampon ng komunidad

4. Learning curve

5. Mga tool at ecosystem

6. Compatibility sa mga umiiral na software system.

### Mga Limitasyon

Ang pag-aampon ng bagong programming language ay nangangailangan ng muling pagsasanay sa mga developer, na kumukuha ng oras at resource. Maaaring maging hamon ang pagsasama ng wika sa umiiral na workflow ng pagbuo. Kailangan naming tiyakin ang compatibility sa mga umiiral na sistema at iwasan ang mga breaking change upang mapanatili ang pagpapatuloy.

### Implementasyon

1. Sasailalim sa pagsasanay ang aming development team upang matutunan at maging pamilyar sa programming language na Rust.

2. Gagawa kami ng bagong proyekto gamit ang Rust bilang pagsubok upang suriin ang compatibility at kaangkupan nito sa aming mga layunin sa pagbuo.

3. Unti-unti naming ililipat sa Rust ang mga umiiral na sistemang nakasulat sa C at C++.

4. Makikipagtulungan kami sa komunidad ng Rust upang galugarin ang mga available na tool at library na makapagpapahusay sa aming workflow ng pagbuo.

5. Regular naming susubaybayan ang performance ng Rust at ihahambing ito sa performance ng mga umiiral na programming language.

6. Mag-aampon kami ng pangmatagalang pamamaraan na nagbabalanse sa mga gastos ng pagsasanay, integrasyon, at mga posibleng benepisyo ng paggamit ng Rust.

### Rasyonal

Inampon namin ang Rust dahil sa natatanging mga feature nito na dinisenyo upang magbigay ng garantiya sa memory safety at seguridad habang pinapanatili ang performance at kahusayan. Ang matibay na type system, borrow checker, at mga konsepto ng memory safety ng Rust ay ginagawa itong lubhang angkop sa pagbuo ng mga application na kritikal sa performance at kritikal sa kaligtasan. Higit pa rito, may malaking komunidad ng mga developer ang Rust, na nagbibigay-daan sa aming ma-access ang malawak na hanay ng mga tool, library, at ecosystem na sumusuporta sa aming workflow ng pagbuo. Bagama't may learning curve ang Rust, naniniwala kaming mas matimbang ang mga benepisyo ng pag-aampon ng Rust kaysa sa mga gastos at nagbibigay ng mahusay na pagkakataon para sa patuloy na paglago at inobasyon.

### Mga Kahihinatnan

1. Ang pag-aampon ng Rust ay mangangailangan ng malaking puhunan ng oras at resource para sanayin ang mga developer at isama ang wika sa umiiral na workflow ng pagbuo.

2. Ang pag-aampon ng Rust ay maaaring magdulot ng ilang antas ng mga isyu sa compatibility sa mga umiiral na sistema, na nangangailangan ng refactoring at mga pagbabago.

3. Ang pag-aampon ng Rust ay maaaring magpataas ng bilang ng mga developer na maaaring mag-ambag sa aming proyekto sa pamamagitan ng pag-akit sa mga developer ng Rust na gustong gumawa sa mga kapana-panabik na proyekto.

4. Ang pag-aampon ay maaaring humantong sa pinabuting performance, kahusayan, at kaligtasan kumpara sa mga umiiral na wika.

5. Panghuli, may kasamang posibleng benepisyo ang pag-aampon ng Rust na mabawasan ang mga kahinaan sa seguridad sa aming mga application.
   
<h6>Kredito: ang pahinang ito ay binuo ng ChatGPT, pagkatapos ay inedit para sa kalinawan at format.</h6>
