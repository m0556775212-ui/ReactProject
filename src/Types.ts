export interface TicketProps {
        id: number,
        subject: string,
        description: string,
        status_id: number | null, 
        priority_id: number | null,
        status_name: string | null,
        priority_name: string | null,
        created_by: number,
        assigned_to: number | null,
        created_at: string,
        updated_at: string | null
}

export interface UserProps {
    id: number,
    name: string,
    email: string,
    role: string,
    created_at: string
}      
export interface newUser {
  name: string,
  email: string,
  password: string,
  role: "customer"
}
export interface Ticket {
    id: number,
    subject: string,
    description: string,
    status_id: 0,
    priority_id: 0,
    assigned_to: 0,
}


export interface comment{
    content: string
}

export interface commentFull {
     id: number,
    ticket_id: number,
    author_id: number,
    content: string,
    author_name: string,
    author_email: string,
    created_at: string
}
export interface IFormInputLogin {
  email: string;
  password: string;
}

export interface IFormInputRegister {
  email: string;
  password: string;
  name: string;
}

export interface status{
    id: number,
    name: string
}

export interface newStatus{
    name: string
}

export interface priority{
    id: number,
    name: string
}

export interface newPriority{
    name: string
}

export interface updateTicket{
  status_id: number | null,
  priority_id: number | null,
  assigned_to: number | null
}