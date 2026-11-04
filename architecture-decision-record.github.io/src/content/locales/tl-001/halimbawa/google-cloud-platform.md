# Architecture Decision Record para sa Google Cloud Platform

## Konteksto

Ang Google Cloud Platform (GCP) ay isang kilalang cloud computing platform na nag-aalok ng iba't ibang cloud service, kasama ang mga solusyon sa computing, storage, at networking. Layunin ng ADR na ito na idokumento ang mga desisyon sa arkitektura para sa pagbuo at pagpapatupad ng infrastructure na nakabatay sa GCP para sa aming organisasyon.

## Desisyon

Nagpasya ang aming organisasyon na gamitin ang Google Cloud Platform bilang cloud infrastructure para sa aming application. Ang mga pangunahing konsiderasyon sa desisyong ito ay:

   - Pagiging matipid

   - Scalability

   - Pagiging maaasahan

   - Flexibility

## Mga Napili

Ang mga sumusunod na serbisyo mula sa GCP ang napili para matugunan ang aming mga requirement:

   - Compute Engine para sa mga virtual machine at computing resource

   - Cloud Storage para sa object storage at file hosting

   - Cloud SQL para sa managed database service

   - Firebase para sa pagbuo at hosting ng app

## Rasyonal

   - Pagiging Matipid: Lubhang matipid ang Google Cloud Platform kumpara sa ibang cloud platform, kaya kaakit-akit na opsyon ito para sa mga organisasyong may limitasyon sa badyet.

   - Scalability: Ang infrastructure ng GCP na madaling i-scale ay nagbibigay-daan sa paghawak ng anumang dami ng trapiko sa real time.

   - Pagiging Maaasahan: Nag-aalok ang mga managed service ng GCP ng mataas na pagiging maaasahan, na may mga awtomatikong backup at kakayahan sa disaster recovery na tinitiyak ang mataas na availability ng mga resource at data.

   - Flexibility: Nagbibigay ang platform ng iba't ibang tool at serbisyo sa iba't ibang domain tulad ng AI, data analytics, at IoT, kaya lubhang maraming gamit.

## Mga Kahihinatnan

Ang paglipat sa Google Cloud Platform ay mangangailangan ng pagsasanay sa aming mga koponan sa mga serbisyo ng GCP, muling pagdidisenyo ng arkitektura ng application para maging compatible sa mga napiling serbisyo, at pag-update ng infrastructure code para suportahan ang mga serbisyo ng GCP. Gayunpaman, inaasahang kapag natapos na ang migrasyon, magkakaroon kami ng lubhang scalable, maaasahan, at matipid na infrastructure para sa pagho-host ng aming application. Gayundin, kakailanganin naming pamahalaan ang patuloy na gastos sa pag-provision ng mga resource sa GCP.

## Konklusyon

Ang Google Cloud Platform ay mahusay na pagpipilian para sa aming cloud infrastructure dahil sa pagiging matipid, scalability, pagiging maaasahan, at flexibility nito. Sa paggamit ng mga napiling serbisyo, makapagbibigay kami ng lubhang available at matatag na infrastructure para sa aming application.
