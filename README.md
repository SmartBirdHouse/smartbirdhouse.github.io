[Unit]
Description=RuuviCollector Service
After=network.target
[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/RuuviCollector
ExecStart=/usr/bin/java -jar /home/pi/RuuviCollector/ruuvi-collector-0.2.jar
SuccessExitStatus=0
Restart=always
RestartSec=5
[Install]
WantedBy=multi-user.target