This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [https://chain-chroniclez.vercel.app](https://chain-chroniclez.vercel.app) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).
### Feature Branch Workflow:
1. Fork the repository to your personal GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch from the dev branch
    ```bash
    git checkout -b my-feature-branch
    ```
5. Implement your changes, committing as needed.
6. Push the feature branch to your forked repository:
   ```bash
   git push origin my-feature-branch
   ```
7. Once you have completed your feature, create a pull request (PR) to merge your changes back into the `dev` branch of the main repository.

### Pull Request and Approval Workflow:
1. Go to the original repository's page on GitHub.
2. Click on the "Pull requests" tab and then click the "New pull request" button.
3. Select the base repository's `dev branch` as the target branch and your forked repository's `feature branch` as the source branch.
4. Use the PR template provided to fill in the necessary where applicable.
5. Assign relevant reviewers to your PR. You can do this by using the "@username" syntax in the description or by using the reviewer assignment feature on GitHub.
6. Wait for reviewers to review your code and provide feedback.
7. Make necessary adjustments based on the feedback received.
8. Once the PR has been reviewed and approved by the assigned reviewers, it can be merged into the dev branch.

### 🟢Additional Guidelines: 💯
1. Before starting work on a new feature, always pull the latest changes from the dev branch to ensure you have the most up-to-date codebase.
2. Avoid directly committing changes to the dev or main branches. All changes should go through feature branches and PRs.
3. Ensure that your code follows the project's coding guidelines and conventions.
4. Be responsive and collaborative during the review process, addressing any comments or concerns raised by reviewers.
   
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
