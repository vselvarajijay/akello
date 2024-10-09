<a href="https://akello.io" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/assets/akello-logo-white.png" style="max-width: 100%; height: 50px; margin-bottom: 20px">
    <img src="/assets/akello-logo.png" alt="Akello Logo" height="50"/>
  </picture>
</a>

<h3></h3>


Akello is an open-source platform designed to integrate diverse healthcare services seamlessly using a microservices architecture. It features a secure message bus that facilitates the efficient and reliable passing of events between services, ensuring a flexible and scalable infrastructure for healthcare applications.


**Out of the box, Akello includes the following:**

- **User Account management**: A robust system for managing user accounts, including role-based access control, user profiles, and permissions, ensuring secure and compliant handling of sensitive healthcare data.

- **Authentication Service**: A built-in authentication service that supports industry-standard protocols like OAuth and SAML, providing secure user login and session management across healthcare applications.

- **Workflow management**: A flexible workflow engine to orchestrate complex clinical processes and healthcare operations, enabling seamless coordination between services and ensuring efficient patient care delivery.

- **Population Health management**: Tools to support population health initiatives by aggregating and analyzing health data across different sources, helping healthcare providers make informed decisions to improve patient outcomes and reduce costs.

- **AI data pipeline processing**: Integrated AI pipelines that enable the processing of large volumes of healthcare data, providing advanced analytics, insights, and automation for clinical decision support and other healthcare applications.


### Get Started
```
git clone git@github.com:akello-io/akello.git
cd akello
./dev-server.sh
```


## Overview of the Repo

```sh
akello/
├── microservices
│   ├── account       # account service
│   ├── auth          # supertoken auth service
│   ├── huggingface   # microservice integrating huggingface models
│   ├── neurology     # BCI, eye tracking data services
│   ├── registry      # Run a clinical trial across a patient population
├── packages
│   ├── core          # core python lbiraries
```

## Contributing

Akello is a community-driven platform. Whether you're submitting an idea, fixing a typo, adding a new guide, or improving an existing one, your contributions are greatly appreciated!

Before contributing, read through the existing issues and pull requests to see if someone else is already working on something similar. That way you can avoid duplicating efforts.

If there are examples or guides you'd like to see, feel free to suggest them on the [issues page](https://github.com/akello-io/akello/issues).

If you'd like to contribute new content, make sure to read through our [contribution guidelines](https://akello.io/docs/developers/contributing). We welcome high-quality submissions of new examples and guides, as long as they meet our criteria and fit within the scope of the cookbook.


[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=akello-io/akello&machine=basicLinux32gb&location=EastUs)


## License

[Apache 2.0](LICENSE.txt)

Copyright &copy; Akello Health 2024

FHIR&reg; is a registered trademark of HL7.

SNOMED&reg; is a registered trademark of the International Health Terminology Standards Development Organisation.

LOINC&reg; is a registered trademark of Regenstrief Institute, Inc.

DICOM&reg; is the registered trademark of the National Electrical Manufacturers Association (NEMA).
