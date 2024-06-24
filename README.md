## Inspiration

Countries often face a delicate balance between fostering development and managing emissions - balancing the priority to save the environment and to save the people. Recognizing this, we were inspired to create an app that goes beyond the traditional approach of simply urging nations to cut emissions immediately.

Our vision is to provide tailored recommendations that align with each country's unique economic and social landscape, paving the way for a sustainable yet progressive future. By understanding the intricate relationship between GDP, quality of life, and emissions, we aim to offer solutions that drive green development without compromising on growth. This holistic approach ensures that our recommendations are both practical and effective, fostering a global commitment to sustainability.

## What It Does

Our app assists countries in refining their climate policies using advanced AI technology. Users begin by selecting any country, and the app then scrapes and analyzes its current climate policy to understand existing strategies and initiatives.

Following this, the app compares the selected country's policies with those of similar countries. This comparative analysis identifies successful strategies that have worked in comparable contexts, providing a foundation for customized recommendations.

The core feature of our app is its predictive modeling. By analyzing various factors such as economic growth, quality of life, and environmental impact, the app determines the best course of emissions for the next 20 years. This ensures that the recommendations are not only sustainable but also supportive of the country's developmental goals.

Based on this analysis, the app generates tailored policy recommendations, balancing sustainable development with economic growth. These recommendations provide a practical and effective approach to reducing emissions.

To add an element of fun, our app includes a hidden easter egg, offering an engaging surprise for users to discover. 🤗

## How We Built It

Our backend is powered by our custom predictive models and AWS technologies. The custom predictive model was built on a series of mathematical equations that predicts the optimal emissions for a country based on the necessity to be climate-friendly and deliver a higher quality-of-life.

Our agentic workflow is heavily powered by AWS. We use retrieval-augmented generated (RAG) powered by AWS Bedrock Knowledge Bases (with the data stored in S3 Buckets) and the AWS Bedrock endpoints for the foundational models. To find similar policies, we use DynamoDB to store and index our data entries. To generate the comprehensive policy based on the predictions and retrieved policy context, we use AWS Bedrock Agents, leveraging AWS Lambda under the hood as well, to tailor our final recommendations.

Our frontend is built on React and Mapbox. Through a comprehensive dataset, we were able to model the world and display the agentic workflow for each country on our front end. Our front end is hosted on Vercel and our backend is hosted on EC2.

P.S: Our easter egg runs on SageMaker!

## Challenges We Ran Into

One of the primary hurdles was working with AWS Bedrock for the first time. Navigating this platform required us to familiarize ourselves with its extensive features and capabilities, which was a steep learning curve.

Setting up IAM (Identity and Access Management) permissions also posed a significant challenge. Ensuring secure and appropriate access control while configuring the necessary permissions required meticulous attention to detail and an understanding of best practices in cloud security.

Finally, connecting the frontend and backend of our application was quite the challenge. Integrating these components seamlessly demanded effective communication between team members and a solid grasp of both frontend and backend technologies.

## Accomplishments That We're Proud Of

It was very difficult to relate the economic output and the emissions of a country. As discussed in the following paper: [Paper Link](https://drive.google.com/file/d/15wGKK-1QbfzFXV8Ln7InW79c1fBmGys9/view?usp=sharing), the economic outputs increases years after the emissions of a country increase, while economically developed countries are more likely to reduce emissions, years after their economic rise. This deep codependence was difficult to emulate using existing statistical and learning models, so a majority of our time was spent developing the novel algorithm described in the paper.

Another one major achievement was successfully connecting the frontend and backend and getting off of localhost! 🥳

We also managed to add several nice-to-have features beyond the initial product scope. These additional functionalities enhance the app's usability and provide users with a more comprehensive tool for improving climate policies.

Moreover, we effectively integrated AWS in multiple ways, leveraging its capabilities to bolster our app's performance and scalability. This integration showcases our ability to utilize advanced cloud services to create a robust and efficient application.

## What We Learned

Throughout this project, we gained valuable experience with various AWS services, including EC2, Lambda, Bedrock, and SageMaker. Each of these services played a crucial role in different aspects of our app, enhancing our understanding of cloud infrastructure and capabilities.

Additionally, we learned how to effectively deploy applications on the cloud. This included setting up and managing cloud resources, ensuring scalability, and maintaining security best practices. This knowledge has been instrumental in developing a robust and reliable app.

## What's Next For Sage

Looking ahead, our primary focus will be on improving our predictive models. By refining these models, we aim to provide even more accurate and reliable recommendations for climate policies. Specifically, we tried building an autoencoder model to use more metrics to define emissions, however, in the short time provided, the autoencoder failed to show promise. 

Additionally, we are committed to enhancing our AI agent workflow. We plan to streamline and optimize the process to ensure it is as efficient and effective as possible, ultimately delivering better outcomes for users seeking to improve their climate policies.
