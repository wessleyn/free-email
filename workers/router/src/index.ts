import { allowedSenders, createDb, emailLogs, sql } from '@repo/db';
import * as PostalMime from 'postal-mime';

export default {
  async email(message: ForwardableEmailMessage, env: Env, ctx: ExecutionContext) {
    const db = createDb(env.DB);
    const parser = new PostalMime.default();
    const rawEmail = new Response(message.raw);
    const email = await parser.parse(await rawEmail.arrayBuffer());

    // Check if sender is in the allowed senders list
    const fromEmail = email.from?.address || '';
    const toEmail = email.to?.[0]?.address || '';

    try {
      const allowedSender = await db.select()
        .from(allowedSenders)
        .where(sql`${allowedSenders.email} = ${fromEmail}`)
        .get();

      const allowed = allowedSender ? 1 : 0;

      // Log the email
      await db.insert(emailLogs).values({
        fromEmail,
        toEmail,
        subject: email.subject || '',
        timestamp: new Date().toISOString(),
        allowed
      });

      if (allowed) {
        console.log('Email allowed:', fromEmail);
        // then save
      }
      console.log('Email not allowed:', fromEmail);
      // then discard
    } catch (err) {
      console.error('Error processing email:', err);
    }
  },
};