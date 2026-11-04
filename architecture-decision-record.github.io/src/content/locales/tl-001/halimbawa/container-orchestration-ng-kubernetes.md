# Architecture Decision Record: Container orchestration ng Kubernetes

## Pahayag ng Problema 

Kailangan naming pumili ng container orchestration platform para sa lumalaki naming portfolio ng mga cloud-native na application. Masyadong mabagal ang kasalukuyan naming legacy platform deployment, at hindi sapat na agile para makasabay sa lumalaki naming pangangailangan. Naghahanap kami ng sistemang magpapahintulot sa aming i-scale ang aming mga serbisyo sa pinakamahusay na paraang posible nang hindi isinasakripisyo ang liksi o dali ng paggamit.

## Mga Alternatibong Isinaalang-alang

1. Docker Swarm

2. Kubernetes

3. Apache Mesos

## Desisyong Ginawa

Matapos ang masusing pagsusuri sa bawat container orchestration platform, nagpasya kaming ampunin ang Kubernetes bilang pinakamahusay na opsyon para sa aming mga pangangailangan sa enterprise. Ang aming mga dahilan sa pagpili sa Kubernetes ay ang mga sumusunod:

1. **Scalability:**  Ang natatanging disenyo ng Kubernetes ay perpekto para sa pag-scale ng mga application, at habang umuunlad sa paglipas ng panahon ang aming mga requirement sa scalability, may built-in na kakayahan ang Kubernetes na tugunan ang mga pagbabagong ito nang walang problema.

2. **Desentralisadong Arkitektura:**  Tinitiyak ng master-worker topology ng Kubernetes ang desentralisadong arkitektura na tinitiyak na walang iisang punto ng pagkabigo.

3. **Suporta ng Komunidad:**  Ang Kubernetes ang may pinakamalaki at pinakaaktibong open-source na komunidad, na nangangahulugang maraming contributor, developer, at vendor kaya mas madali para sa amin ang humingi ng tulong at humanap ng resource.

4. **Suporta ng Ecosystem:**  May lumalagong ecosystem ang Kubernetes na may iba't ibang third-party na tool, integrasyon sa mga container registry, CI/CD pipeline, data storage, at iba pa.

Samakatuwid, nagpasya kaming ampunin ang Kubernetes bilang aming container orchestration platform para sa kasalukuyan at agarang hinaharap.

<h6>Kredito: ang pahinang ito ay binuo ng ChatGPT, pagkatapos ay inedit para sa kalinawan at format.</h6>
