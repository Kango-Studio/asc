import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com diferentes serviços de email
    // Opção 1: Resend (recomendado - https://resend.com)
    // Opção 2: SendGrid
    // Opção 3: Nodemailer (Gmail, SMTP customizado)
    // Opção 4: API própria ou serviço backend

    // EXEMPLO COM RESEND (descomente e configure):
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const emailHtml = `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contato@asc.srv.br',
      to: process.env.TO_EMAIL || 'contato@asc.srv.br',
      subject: `[Contato] ${subject}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true, id: result.id });
    */

    // EXEMPLO COM NODEMAILER (descomente e configure):
    /*
    import nodemailer from 'nodemailer';
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || 'contato@asc.srv.br',
      to: process.env.TO_EMAIL || 'contato@asc.srv.br',
      subject: `[Contato] ${subject}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
    */

    // Por enquanto, apenas log (para desenvolvimento)
    // REMOVA ISSO quando configurar o envio real de email
    console.log('📧 Email de contato recebido:', {
      name,
      email,
      phone,
      subject,
      message,
    });

    // Simulação de sucesso (remova quando configurar envio real)
    return NextResponse.json({ 
      success: true,
      message: 'Mensagem recebida com sucesso! Em breve entraremos em contato.' 
    });
  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return NextResponse.json(
      { error: 'Erro ao processar mensagem. Tente novamente.' },
      { status: 500 }
    );
  }
}

