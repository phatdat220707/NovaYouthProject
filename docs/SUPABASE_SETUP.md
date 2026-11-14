# Supabase setup for Biruk

## Immediate task

Create and configure the Supabase project while David builds the app. David does not have a Supabase account. Do not wait for David to create the project.

1. Sign in at https://supabase.com/dashboard and create a NEW project named BinCheck HK. Choose an available region near Hong Kong and save the database password privately.
2. Keep the Data API enabled. The setup script supplies explicit table permissions and Row Level Security policies.
3. Open SQL Editor, start a new query, paste the ENTIRE contents of ../supabase/setup.sql and run it ONCE. The intended repository path is supabase/setup.sql from the root. Do not run in an unrelated existing project.
4. Confirm the result lists attempts, facilities, observations, photos and profiles.
5. Open Storage and confirm a PRIVATE bucket named bin-evidence. The script sets a 5 MB file limit and allows JPEG, PNG and WebP images.
6. Open Connect or Settings > API Keys. Record the project URL, publishable key and server-only secret key. If a new secret key needs to be created, create one for the app backend. The database password is not the API key.
7. Configure values using the root .env.example as a naming guide. Keep filled files private and ignored by Git. Do not post secret keys in commits, issues or README files. David will configure the production server environment.

## What to send David

- Project URL and project reference.
- Confirmation that the SQL succeeded and the bin-evidence bucket is private.
- The publishable key, which is intended for browser use under database policies.
- Arrange private transfer of the server secret, or use your normal Supabase collaboration settings. Never put the secret in this repository.

## Current access model

Anyone can view approved facilities and approved evidence. Only the team can call the protected upload, model-assessment, submission and review endpoints. The current prototype uses a shared team-code session enforced by the app server. Supabase secret-key access bypasses RLS, so the server must check that session before every privileged action.

New records are pending. Every stage-demo record remains labelled as Demo after approval. Public clients have no direct INSERT, UPDATE or DELETE privileges on the app tables. The future profiles table does not allow users to promote themselves to reviewers.

## Accounts are a later step

Today, do not add Google OAuth, public signup, SMTP or password-reset workflows. When individual accounts are implemented, configure the chosen Auth provider, production Site URL, exact permitted callback URLs, user-profile creation and server-validated contributor/reviewer permissions. Authentication alone must not grant reviewer access.

## Expected checks

- An anonymous request cannot read pending observations or their photographs.
- Public approved records can be read with the publishable key.
- The team can save and review records through protected server endpoints.
- Data survives refresh and appears across devices after approval.

These application checks require the app connection to be completed. Running SQL alone does not verify them.

## References

- https://supabase.com/docs/guides/getting-started/quickstarts/reactjs
- https://supabase.com/docs/guides/getting-started/api-keys
- https://supabase.com/docs/guides/storage/security/access-control
- https://supabase.com/docs/guides/auth/redirect-urls
