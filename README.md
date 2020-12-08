# Introduction 

This repository contains all API Management Policies used by TRR.

Please use the SAML-JWT-CSRF policy.

# Getting Started

To upload a policy it needs to be zipped.

## Installation

1. Change folder to the policy you want to upload, e.g ValidateJWT.
2. Zip complete folder, including the folder structure.
3. Upload policy into API Management.

## Push changes to git

Unfortunately all policies are exported from API Management as zip files, and then need to be manually added to the git repository.

1. Download template from API Management.
2. Unzip files into a temporary directory.
3. If the policy does not exist in the repository, create a folder with a descriptive name.
4. Copy all files, keeping the folder structure, into the root folder of the repository.
5. Add a README with the same name as the policy in the root directory. Do not add it into the policy directory as this will break the import into API Management.
