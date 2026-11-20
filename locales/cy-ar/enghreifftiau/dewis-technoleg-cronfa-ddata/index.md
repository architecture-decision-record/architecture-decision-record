# Cofnod penderfyniad saernïaeth: dewis technoleg cronfa ddata

## Statws

Wedi'i dderbyn

## Cyd-destun

Rydym yn dylunio cymhwysiad newydd sy'n gofyn am storio ac adfer data mewn modd graddadwy a pherfformiol. Rydym wedi nodi tri math o dechnolegau cronfeydd data a ddefnyddir yn gyffredin: cronfeydd data perthynol, cronfeydd data dogfennau, a chronfeydd data digwyddiadau.

Mae cronfeydd data perthynol yn storio data mewn tablau gyda sgemâu sefydlog ac yn gorfodi cyfyngiadau llym ar uniondeb data. Maent yn addas ar gyfer cymwysiadau sydd angen perthnasoedd data cymhleth a thrafodion. Mae enghreifftiau'n cynnwys MySQL, PostgreSQL ac Oracle.

Mae cronfeydd data dogfennau yn storio data mewn dogfennau tebyg i JSON ac nid oes ganddynt sgema. Maent yn addas iawn ar gyfer cymwysiadau sydd angen modelau data hyblyg a graddio'n llorweddol. Mae enghreifftiau'n cynnwys MongoDB, Couchbase ac Amazon DynamoDB.

Mae cronfeydd data digwyddiadau yn storio data fel cyfres o ddigwyddiadau, gan gofnodi pob newid i'r data. Maent yn addas ar gyfer cymwysiadau sydd angen archwilio, cyrchu digwyddiadau (event sourcing) a phrosesu data cymhleth. Mae enghreifftiau'n cynnwys Apache Kafka, Apache Pulsar ac AWS Kinesis.
Penderfyniad

Ar ôl gwerthuso gofynion a chyfyngiadau ein cymhwysiad yn ofalus, rydym wedi penderfynu defnyddio cronfa ddata dogfennau.

## Sail resymegol

Rydym wedi dewis cronfa ddata dogfennau oherwydd:

1. Mae ein cymhwysiad yn gofyn am fodel data hyblyg a all esblygu dros amser. Mae cronfeydd data dogfennau yn caniatáu i ni storio data mewn fformat heb sgema, sy'n golygu y gallwn ychwanegu meysydd newydd neu newid strwythur dogfennau presennol heb orfod addasu sgema'r gronfa ddata.

2. Mae angen i'n cymhwysiad raddio'n llorweddol i ymdrin â symiau mawr o ddata a thraffig. Mae cronfeydd data dogfennau yn darparu cefnogaeth adeiledig ar gyfer rhannu (sharding) a dyblygu, sy'n ein galluogi i ddosbarthu data ar draws sawl gweinydd ac ymdrin â thrwybwn darllen ac ysgrifennu uchel.

3. Mae ein cymhwysiad yn gofyn am adfer data'n gyflym ac yn effeithlon. Mae cronfeydd data dogfennau yn darparu galluoedd mynegeio a holi grymus sy'n ein galluogi i adfer data'n gyflym ac yn effeithlon.

4. Nid yw ein cymhwysiad yn gofyn am drafodion na pherthnasoedd data cymhleth. Er bod cronfeydd data perthynol yn rhagori ar orfodi cyfyngiadau uniondeb data ac ymdrin â thrafodion cymhleth, nid oes gan ein cymhwysiad ofynion o'r fath. Gall cronfeydd data dogfennau ddarparu sicrwydd digonol o ran cysondeb a gwydnwch ar gyfer ein hachos defnydd.

## Canlyniadau

Drwy ddewis cronfa ddata dogfennau, bydd angen i ni fuddsoddi mewn dysgu a deall y dechnoleg benodol y byddwn yn ei dewis. Yn ogystal, bydd angen i ni sicrhau bod model data ein cymhwysiad yn ffitio'n dda â model data'r gronfa ddata dogfennau i wneud y mwyaf o berfformiad a graddadwyedd.

Fodd bynnag, credwn fod manteision defnyddio cronfa ddata dogfennau yn drech na'r costau, ac mai hi yw'r ffit orau ar gyfer gofynion a chyfyngiadau ein cymhwysiad.
