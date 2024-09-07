const int led=13;
const int sensor=2;
void setup() {
  // put your setup code here, to run once:
pinMode(led,OUTPUT);
pinMode(sensor,INPUT);
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
if (digitalRead(sensor)==HIGH)
{
  digitalWrite(led,HIGH);
  Serial.println("There is Something ahead");
  
}
else
{
  digitalWrite(led,LOW);
  Serial.println("Path is Clear");
  
}
delay(500);
}
