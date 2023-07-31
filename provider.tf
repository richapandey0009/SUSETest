# Specify the provider (GCP, AWS, Azure)
provider "google" {
credentials = "${file("credentials.json")}"
project = "SUSETest-Level3"
region = "us-central1"
}