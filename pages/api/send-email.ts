import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;

        try {
            await sendgrid.send({
                // to: 'contact@smilinedentistry.ca',
                to: 'contact@smilinedentistry.ca',
                from: 'uzair@smilinedentistry.ca',
                templateId: 'd-8bf15c15d95b4ea0aebbd4f415daf186',
                dynamicTemplateData: {
                    name,
                    email,
                    phone,
                    message,
                }
            });

            return res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send message. Please Contact us Directly at contact@smilinedentistry.ca' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;
