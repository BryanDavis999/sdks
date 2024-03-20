import * as buffer from 'buffer';

declare class OnvoBase {
    #private;
    endpoint: string;
    fetchBase(url: string, method?: "GET" | "PUT" | "POST" | "DELETE" | "PATCH", body?: any, isForm?: boolean): Promise<unknown>;
    fetchBlob(url: string, method?: "GET" | "PUT" | "POST" | "DELETE" | "PATCH", body?: any): Promise<buffer.Blob>;
    constructor(apiKey: string, options?: {
        endpoint: string;
    });
}

declare class OnvoAccounts extends OnvoBase {
    list(): Promise<{
        avatar_url: string | null;
        email: string | null;
        full_name: string | null;
        id: string;
        phone_number: string | null;
        updated_at: string | null;
    }[]>;
    get(id: string): Promise<{
        avatar_url: string | null;
        email: string | null;
        full_name: string | null;
        id: string;
        phone_number: string | null;
        updated_at: string | null;
    }>;
}

type Json = string | number | boolean | null | {
    [key: string]: Json | undefined;
} | Json[];
interface Database {
    public: {
        Tables: {
            accounts: {
                Row: {
                    avatar_url: string | null;
                    email: string | null;
                    full_name: string | null;
                    id: string;
                    phone_number: string | null;
                    updated_at: string | null;
                };
                Insert: {
                    avatar_url?: string | null;
                    email?: string | null;
                    full_name?: string | null;
                    id: string;
                    phone_number?: string | null;
                    updated_at?: string | null;
                };
                Update: {
                    avatar_url?: string | null;
                    email?: string | null;
                    full_name?: string | null;
                    id?: string;
                    phone_number?: string | null;
                    updated_at?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "users_id_fkey";
                        columns: ["id"];
                        isOneToOne: true;
                        referencedRelation: "users";
                        referencedColumns: ["id"];
                    }
                ];
            };
            api_keys: {
                Row: {
                    created_at: string | null;
                    hash: string;
                    id: string;
                    last_used_at: string | null;
                    prefix: string;
                    scopes: string[];
                    suffix: string;
                    team: string;
                    title: string;
                };
                Insert: {
                    created_at?: string | null;
                    hash: string;
                    id?: string;
                    last_used_at?: string | null;
                    prefix: string;
                    scopes?: string[];
                    suffix: string;
                    team: string;
                    title: string;
                };
                Update: {
                    created_at?: string | null;
                    hash?: string;
                    id?: string;
                    last_used_at?: string | null;
                    prefix?: string;
                    scopes?: string[];
                    suffix?: string;
                    team?: string;
                    title?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "api_keys_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            automation_runs: {
                Row: {
                    automation: string;
                    id: string;
                    recipient_emails: string[] | null;
                    run_at: string;
                    status: string;
                    team: string;
                };
                Insert: {
                    automation: string;
                    id?: string;
                    recipient_emails?: string[] | null;
                    run_at?: string;
                    status: string;
                    team: string;
                };
                Update: {
                    automation?: string;
                    id?: string;
                    recipient_emails?: string[] | null;
                    run_at?: string;
                    status?: string;
                    team?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "automation_runs_automation_fkey";
                        columns: ["automation"];
                        isOneToOne: false;
                        referencedRelation: "automations";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "automation_runs_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            automations: {
                Row: {
                    created_at: string;
                    created_by: string;
                    dashboard: string;
                    description: string | null;
                    email_format: string;
                    email_subject: string;
                    enabled: boolean;
                    id: string;
                    last_run_at: string | null;
                    last_updated_at: string;
                    last_updated_by: string | null;
                    next_run_at: string | null;
                    output_format: string;
                    recipient_type: string;
                    recipients: string[] | null;
                    schedule: string;
                    team: string;
                    timezone: string;
                    title: string;
                };
                Insert: {
                    created_at?: string;
                    created_by: string;
                    dashboard: string;
                    description?: string | null;
                    email_format: string;
                    email_subject: string;
                    enabled?: boolean;
                    id?: string;
                    last_run_at?: string | null;
                    last_updated_at?: string;
                    last_updated_by?: string | null;
                    next_run_at?: string | null;
                    output_format: string;
                    recipient_type: string;
                    recipients?: string[] | null;
                    schedule: string;
                    team: string;
                    timezone?: string;
                    title: string;
                };
                Update: {
                    created_at?: string;
                    created_by?: string;
                    dashboard?: string;
                    description?: string | null;
                    email_format?: string;
                    email_subject?: string;
                    enabled?: boolean;
                    id?: string;
                    last_run_at?: string | null;
                    last_updated_at?: string;
                    last_updated_by?: string | null;
                    next_run_at?: string | null;
                    output_format?: string;
                    recipient_type?: string;
                    recipients?: string[] | null;
                    schedule?: string;
                    team?: string;
                    timezone?: string;
                    title?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "automations_created_by_fkey";
                        columns: ["created_by"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "automations_dashboard_fkey";
                        columns: ["dashboard"];
                        isOneToOne: false;
                        referencedRelation: "dashboards";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "automations_last_updated_by_fkey";
                        columns: ["last_updated_by"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "automations_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            dashboard_datasources: {
                Row: {
                    dashboard: string;
                    datasource: string;
                    team: string;
                };
                Insert: {
                    dashboard: string;
                    datasource: string;
                    team: string;
                };
                Update: {
                    dashboard?: string;
                    datasource?: string;
                    team?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "dashboard_datasources_dashboard_fkey";
                        columns: ["dashboard"];
                        isOneToOne: false;
                        referencedRelation: "dashboards";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "dashboard_datasources_datasource_fkey";
                        columns: ["datasource"];
                        isOneToOne: false;
                        referencedRelation: "datasources";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "dashboard_datasources_datasource_fkey";
                        columns: ["datasource"];
                        isOneToOne: false;
                        referencedRelation: "decrypted_datasources";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "dashboard_datasources_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            dashboards: {
                Row: {
                    created_at: string;
                    created_by: string | null;
                    description: string | null;
                    id: string;
                    last_updated_at: string;
                    last_updated_by: string | null;
                    parent_dashboard: string | null;
                    settings: Json;
                    team: string;
                    thumbnail: string | null;
                    title: string;
                };
                Insert: {
                    created_at?: string;
                    created_by?: string | null;
                    description?: string | null;
                    id?: string;
                    last_updated_at?: string;
                    last_updated_by?: string | null;
                    parent_dashboard?: string | null;
                    settings?: Json;
                    team: string;
                    thumbnail?: string | null;
                    title: string;
                };
                Update: {
                    created_at?: string;
                    created_by?: string | null;
                    description?: string | null;
                    id?: string;
                    last_updated_at?: string;
                    last_updated_by?: string | null;
                    parent_dashboard?: string | null;
                    settings?: Json;
                    team?: string;
                    thumbnail?: string | null;
                    title?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "dashboards_created_by_fkey";
                        columns: ["created_by"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "dashboards_last_updated_by_fkey";
                        columns: ["last_updated_by"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "dashboards_parent_dashboard_fkey";
                        columns: ["parent_dashboard"];
                        isOneToOne: false;
                        referencedRelation: "dashboards";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "dashboards_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            datasources: {
                Row: {
                    columns: Json | null;
                    config: string | null;
                    created_at: string;
                    created_by: string | null;
                    description: string;
                    id: string;
                    last_updated_at: string;
                    last_updated_by: string | null;
                    parameters: string | null;
                    sample_data: string | null;
                    size: number;
                    source: string;
                    team: string;
                    title: string;
                };
                Insert: {
                    columns?: Json | null;
                    config?: string | null;
                    created_at?: string;
                    created_by?: string | null;
                    description?: string;
                    id?: string;
                    last_updated_at?: string;
                    last_updated_by?: string | null;
                    parameters?: string | null;
                    sample_data?: string | null;
                    size?: number;
                    source: string;
                    team: string;
                    title: string;
                };
                Update: {
                    columns?: Json | null;
                    config?: string | null;
                    created_at?: string;
                    created_by?: string | null;
                    description?: string;
                    id?: string;
                    last_updated_at?: string;
                    last_updated_by?: string | null;
                    parameters?: string | null;
                    sample_data?: string | null;
                    size?: number;
                    source?: string;
                    team?: string;
                    title?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "datasources_created_by_fkey";
                        columns: ["created_by"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "datasources_last_updated_by_fkey";
                        columns: ["last_updated_by"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "datasources_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            embed_users: {
                Row: {
                    created_at: string;
                    email: string | null;
                    id: string;
                    last_updated_at: string;
                    metadata: Json | null;
                    name: string;
                    team: string;
                };
                Insert: {
                    created_at?: string;
                    email?: string | null;
                    id: string;
                    last_updated_at?: string;
                    metadata?: Json | null;
                    name: string;
                    team: string;
                };
                Update: {
                    created_at?: string;
                    email?: string | null;
                    id?: string;
                    last_updated_at?: string;
                    metadata?: Json | null;
                    name?: string;
                    team?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "organisation_users_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            integrations: {
                Row: {
                    config: string;
                    created_at: string;
                    provider: string;
                    team: string;
                };
                Insert: {
                    config: string;
                    created_at?: string;
                    provider: string;
                    team: string;
                };
                Update: {
                    config?: string;
                    created_at?: string;
                    provider?: string;
                    team?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "integrations_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            invites: {
                Row: {
                    created_at: string;
                    email: string;
                    name: string;
                    team: string;
                };
                Insert: {
                    created_at?: string;
                    email: string;
                    name: string;
                    team: string;
                };
                Update: {
                    created_at?: string;
                    email?: string;
                    name?: string;
                    team?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "invites_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            logs: {
                Row: {
                    cost: number | null;
                    created_at: string;
                    id: string;
                    messages: Json | null;
                    model: string;
                    success: boolean | null;
                    team: string;
                    tokens: number | null;
                    type: string;
                };
                Insert: {
                    cost?: number | null;
                    created_at?: string;
                    id?: string;
                    messages?: Json | null;
                    model: string;
                    success?: boolean | null;
                    team: string;
                    tokens?: number | null;
                    type: string;
                };
                Update: {
                    cost?: number | null;
                    created_at?: string;
                    id?: string;
                    messages?: Json | null;
                    model?: string;
                    success?: boolean | null;
                    team?: string;
                    tokens?: number | null;
                    type?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "logs_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            members: {
                Row: {
                    account: string;
                    team: string;
                };
                Insert: {
                    account: string;
                    team: string;
                };
                Update: {
                    account?: string;
                    team?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "members_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "members_user_fkey";
                        columns: ["account"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    }
                ];
            };
            questions: {
                Row: {
                    account: string | null;
                    created_at: string;
                    dashboard: string;
                    embed_user: string | null;
                    id: string;
                    messages: Json;
                    query: string;
                    team: string | null;
                };
                Insert: {
                    account?: string | null;
                    created_at?: string;
                    dashboard: string;
                    embed_user?: string | null;
                    id?: string;
                    messages?: Json;
                    query: string;
                    team?: string | null;
                };
                Update: {
                    account?: string | null;
                    created_at?: string;
                    dashboard?: string;
                    embed_user?: string | null;
                    id?: string;
                    messages?: Json;
                    query?: string;
                    team?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "questions_dashboard_fkey";
                        columns: ["dashboard"];
                        isOneToOne: false;
                        referencedRelation: "dashboards";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "questions_organisation_user_fkey";
                        columns: ["embed_user"];
                        isOneToOne: false;
                        referencedRelation: "embed_users";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "questions_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "questions_user_fkey";
                        columns: ["account"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    }
                ];
            };
            sessions: {
                Row: {
                    created_at: string;
                    dashboard: string;
                    embed_user: string;
                    parameters: string;
                    team: string;
                };
                Insert: {
                    created_at?: string;
                    dashboard: string;
                    embed_user: string;
                    parameters?: string;
                    team: string;
                };
                Update: {
                    created_at?: string;
                    dashboard?: string;
                    embed_user?: string;
                    parameters?: string;
                    team?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "sessions_dashboard_fkey";
                        columns: ["dashboard"];
                        isOneToOne: false;
                        referencedRelation: "dashboards";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "sessions_embed_user_fkey";
                        columns: ["embed_user"];
                        isOneToOne: false;
                        referencedRelation: "embed_users";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "sessions_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            subscription_plans: {
                Row: {
                    automations: boolean;
                    integrations: boolean;
                    name: string;
                    users: number | null;
                    widgets: number;
                };
                Insert: {
                    automations?: boolean;
                    integrations?: boolean;
                    name: string;
                    users?: number | null;
                    widgets?: number;
                };
                Update: {
                    automations?: boolean;
                    integrations?: boolean;
                    name?: string;
                    users?: number | null;
                    widgets?: number;
                };
                Relationships: [];
            };
            subscriptions: {
                Row: {
                    amount: number;
                    created_at: string;
                    currency: string;
                    id: string;
                    interval: string;
                    period_end: string;
                    period_start: string;
                    product_name: string;
                    stripe_customer_id: string;
                    stripe_product_id: string;
                    team: string;
                };
                Insert: {
                    amount: number;
                    created_at?: string;
                    currency: string;
                    id: string;
                    interval: string;
                    period_end: string;
                    period_start?: string;
                    product_name: string;
                    stripe_customer_id: string;
                    stripe_product_id: string;
                    team: string;
                };
                Update: {
                    amount?: number;
                    created_at?: string;
                    currency?: string;
                    id?: string;
                    interval?: string;
                    period_end?: string;
                    period_start?: string;
                    product_name?: string;
                    stripe_customer_id?: string;
                    stripe_product_id?: string;
                    team?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "subscriptions_product_name_fkey";
                        columns: ["product_name"];
                        isOneToOne: false;
                        referencedRelation: "subscription_plans";
                        referencedColumns: ["name"];
                    },
                    {
                        foreignKeyName: "subscriptions_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            teams: {
                Row: {
                    created_at: string | null;
                    email: string | null;
                    id: string;
                    logo: string | null;
                    name: string | null;
                    phone_number: string | null;
                    stripe_id: string | null;
                };
                Insert: {
                    created_at?: string | null;
                    email?: string | null;
                    id?: string;
                    logo?: string | null;
                    name?: string | null;
                    phone_number?: string | null;
                    stripe_id?: string | null;
                };
                Update: {
                    created_at?: string | null;
                    email?: string | null;
                    id?: string;
                    logo?: string | null;
                    name?: string | null;
                    phone_number?: string | null;
                    stripe_id?: string | null;
                };
                Relationships: [];
            };
            widgets: {
                Row: {
                    cache: string | null;
                    code: string;
                    created_at: string;
                    dashboard: string;
                    h: number | null;
                    id: string;
                    messages: Json;
                    settings: Json;
                    team: string;
                    title: string;
                    w: number | null;
                    x: number | null;
                    y: number | null;
                };
                Insert: {
                    cache?: string | null;
                    code: string;
                    created_at?: string;
                    dashboard: string;
                    h?: number | null;
                    id?: string;
                    messages?: Json;
                    settings?: Json;
                    team: string;
                    title: string;
                    w?: number | null;
                    x?: number | null;
                    y?: number | null;
                };
                Update: {
                    cache?: string | null;
                    code?: string;
                    created_at?: string;
                    dashboard?: string;
                    h?: number | null;
                    id?: string;
                    messages?: Json;
                    settings?: Json;
                    team?: string;
                    title?: string;
                    w?: number | null;
                    x?: number | null;
                    y?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "widgets_dashboard_fkey";
                        columns: ["dashboard"];
                        isOneToOne: false;
                        referencedRelation: "dashboards";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "widgets_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
        };
        Views: {
            decrypted_datasources: {
                Row: {
                    columns: Json | null;
                    config: string | null;
                    created_at: string | null;
                    created_by: string | null;
                    description: string | null;
                    id: string | null;
                    last_updated_at: string | null;
                    last_updated_by: string | null;
                    parameters: string | null;
                    sample_data: string | null;
                    size: number | null;
                    source: string | null;
                    team: string | null;
                    title: string | null;
                };
                Insert: {
                    columns?: Json | null;
                    config?: never;
                    created_at?: string | null;
                    created_by?: string | null;
                    description?: string | null;
                    id?: string | null;
                    last_updated_at?: string | null;
                    last_updated_by?: string | null;
                    parameters?: never;
                    sample_data?: never;
                    size?: number | null;
                    source?: string | null;
                    team?: string | null;
                    title?: string | null;
                };
                Update: {
                    columns?: Json | null;
                    config?: never;
                    created_at?: string | null;
                    created_by?: string | null;
                    description?: string | null;
                    id?: string | null;
                    last_updated_at?: string | null;
                    last_updated_by?: string | null;
                    parameters?: never;
                    sample_data?: never;
                    size?: number | null;
                    source?: string | null;
                    team?: string | null;
                    title?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "datasources_created_by_fkey";
                        columns: ["created_by"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "datasources_last_updated_by_fkey";
                        columns: ["last_updated_by"];
                        isOneToOne: false;
                        referencedRelation: "accounts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "datasources_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            decrypted_integrations: {
                Row: {
                    config: string | null;
                    created_at: string | null;
                    provider: string | null;
                    team: string | null;
                };
                Insert: {
                    config?: never;
                    created_at?: string | null;
                    provider?: string | null;
                    team?: string | null;
                };
                Update: {
                    config?: never;
                    created_at?: string | null;
                    provider?: string | null;
                    team?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "integrations_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            decrypted_sessions: {
                Row: {
                    created_at: string | null;
                    dashboard: string | null;
                    embed_user: string | null;
                    parameters: string | null;
                    team: string | null;
                };
                Insert: {
                    created_at?: string | null;
                    dashboard?: string | null;
                    embed_user?: string | null;
                    parameters?: never;
                    team?: string | null;
                };
                Update: {
                    created_at?: string | null;
                    dashboard?: string | null;
                    embed_user?: string | null;
                    parameters?: never;
                    team?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "sessions_dashboard_fkey";
                        columns: ["dashboard"];
                        isOneToOne: false;
                        referencedRelation: "dashboards";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "sessions_embed_user_fkey";
                        columns: ["embed_user"];
                        isOneToOne: false;
                        referencedRelation: "embed_users";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "sessions_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
            decrypted_widgets: {
                Row: {
                    cache: string | null;
                    code: string | null;
                    created_at: string | null;
                    dashboard: string | null;
                    h: number | null;
                    id: string | null;
                    messages: Json | null;
                    settings: Json | null;
                    team: string | null;
                    title: string | null;
                    w: number | null;
                    x: number | null;
                    y: number | null;
                };
                Insert: {
                    cache?: never;
                    code?: string | null;
                    created_at?: string | null;
                    dashboard?: string | null;
                    h?: number | null;
                    id?: string | null;
                    messages?: Json | null;
                    settings?: Json | null;
                    team?: string | null;
                    title?: string | null;
                    w?: number | null;
                    x?: number | null;
                    y?: number | null;
                };
                Update: {
                    cache?: never;
                    code?: string | null;
                    created_at?: string | null;
                    dashboard?: string | null;
                    h?: number | null;
                    id?: string | null;
                    messages?: Json | null;
                    settings?: Json | null;
                    team?: string | null;
                    title?: string | null;
                    w?: number | null;
                    x?: number | null;
                    y?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "widgets_dashboard_fkey";
                        columns: ["dashboard"];
                        isOneToOne: false;
                        referencedRelation: "dashboards";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "widgets_team_fkey";
                        columns: ["team"];
                        isOneToOne: false;
                        referencedRelation: "teams";
                        referencedColumns: ["id"];
                    }
                ];
            };
        };
        Functions: {
            can_create_widget: {
                Args: {
                    p_auth: Json;
                };
                Returns: boolean;
            };
            check_id_in_dashboards: {
                Args: {
                    id: string;
                    json_data: Json;
                };
                Returns: boolean;
            };
            string_to_uuid_array: {
                Args: {
                    input_string: string;
                };
                Returns: unknown;
            };
            stripe_can_create_automation: {
                Args: {
                    organisation: string;
                };
                Returns: boolean;
            };
            stripe_can_create_datasource: {
                Args: {
                    organisation: string;
                    type: string;
                };
                Returns: boolean;
            };
            stripe_can_create_invite: {
                Args: {
                    organisation: string;
                };
                Returns: boolean;
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
type Tables<PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] & Database["public"]["Views"]) | {
    schema: keyof Database;
}, TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] & Database[PublicTableNameOrOptions["schema"]]["Views"]) : never = never> = PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] & Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
    Row: infer R;
} ? R : never : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] & Database["public"]["Views"]) ? (Database["public"]["Tables"] & Database["public"]["Views"])[PublicTableNameOrOptions] extends {
    Row: infer R;
} ? R : never : never;
type TablesInsert<PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | {
    schema: keyof Database;
}, TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"] : never = never> = PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I;
} ? I : never : PublicTableNameOrOptions extends keyof Database["public"]["Tables"] ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I;
} ? I : never : never;
type TablesUpdate<PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | {
    schema: keyof Database;
}, TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"] : never = never> = PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U;
} ? U : never : PublicTableNameOrOptions extends keyof Database["public"]["Tables"] ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U;
} ? U : never : never;
type Enums<PublicEnumNameOrOptions extends keyof Database["public"]["Enums"] | {
    schema: keyof Database;
}, EnumName extends PublicEnumNameOrOptions extends {
    schema: keyof Database;
} ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"] : never = never> = PublicEnumNameOrOptions extends {
    schema: keyof Database;
} ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName] : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"] ? Database["public"]["Enums"][PublicEnumNameOrOptions] : never;

type Modify<A, B extends DeepPartialAny<A>> = {
    [K in keyof A | keyof B]: K extends keyof A ? K extends keyof B ? A[K] extends AnyObject ? B[K] extends AnyObject ? Modify<A[K], B[K]> : B[K] : B[K] : A[K] : B[K];
};
type AnyObject = Record<string, any>;
type DeepPartialAny<T> = {
    [P in keyof T]?: T[P] extends AnyObject ? DeepPartialAny<T[P]> : any;
};

declare enum Table {
    Countries = "countries",
    Invites = "invites",
    ItineraryInvites = "itinerary_invites",
    Itineraries = "itineraries",
    Members = "members",
    Teams = "teams",
    Travelers = "travelers",
    Accounts = "accounts",
    DataSources = "datasources",
    EmbedUsers = "embed_users",
    APIKeys = "api_keys",
    Widgets = "widgets",
    Dashboards = "dashboards",
    DashboardDatasources = "dashboard_datasources",
    Sessions = "sessions",
    Questions = "questions",
    Integrations = "integrations",
    DecryptedIntegrations = "decrypted_integrations",
    DecryptedSessions = "decrypted_sessions",
    DecryptedWidgets = "decrypted_widgets",
    DecryptedDatasources = "decrypted_datasources",
    Subscriptions = "subscriptions",
    SubscriptionPlans = "subscription_plans",
    Automations = "automations",
    AutomationRuns = "automation_runs",
    Logs = "logs"
}

type APIDatasourceConfig = {
    url?: string;
    type?: "json" | "csv" | "xml" | "excel";
    method?: "GET" | "POST";
    headers?: string;
    body?: string;
    transform?: string;
};
type OauthConfig = {
    access_token: string;
    refresh_token: string;
    access_expires_at: string;
    refresh_expires_at: string;
};
type FileDatasourceConfig = {
    url?: string;
    filename?: string;
    type?: "json" | "csv" | "xml" | "excel";
};
type RedshiftDatasourceConfig = {
    host: string;
    port: string;
    user: string;
    password: string;
    database: string;
    query: string;
};
type SQLDatasourceConfig = {
    host: string;
    user: string;
    password: string;
    database: string;
    query: string;
};
type PostgreSQLDatasourceConfig = {
    host: string;
    port: string;
    database: string;
    user: string;
    password: string;
    query: string;
};
type RootfiDatasourceConfig = {
    company_id: number;
    resource: string;
};
type MongoDBDatasourceConfig = {
    url: string;
    database: string;
    collection: string;
};
type AirtableDatasourceConfig = {
    baseId: string;
    baseName: string;
    tableId: string;
    tableName: string;
};
type GoogleSheetDatasourceConfig = {
    docId: string;
    sheetId: number;
    sheetName: string;
};
type ZohoDatasourceConfig = {
    product: string;
    module: string;
};
type FirestoreDatasourceConfig = {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
    universe_domain: string;
    databaseURL: string;
    collection: string;
};

type Settings = {
    theme: "dark" | "light" | "auto";
    dark_background: string;
    dark_foreground: string;
    light_background: string;
    light_foreground: string;
    border_radius: number;
    font: string;
    editable: boolean;
    can_ask_questions: boolean;
    hide_header: boolean;
};
type Invite = Database["public"]["Tables"]["invites"]["Row"];
type Member = Database["public"]["Tables"]["members"]["Row"];
type Team = Database["public"]["Tables"]["teams"]["Row"];
type Account = Database["public"]["Tables"]["accounts"]["Row"];
type DataSource = Modify<Database["public"]["Tables"]["datasources"]["Row"], {
    columns: {
        title: string;
        description: string;
    }[];
}>;
type EmbedUser = Database["public"]["Tables"]["embed_users"]["Row"];
type Subscription = Database["public"]["Tables"]["subscriptions"]["Row"];
type SubscriptionPlan = Database["public"]["Tables"]["subscription_plans"]["Row"];
type APIKey = Database["public"]["Tables"]["api_keys"]["Row"];
type Widget = Database["public"]["Tables"]["widgets"]["Row"];
type Dashboard = Modify<Database["public"]["Tables"]["dashboards"]["Row"], {
    settings?: Settings;
}>;
type DashboardDatasource = Database["public"]["Tables"]["dashboard_datasources"]["Row"];
type Session = Database["public"]["Tables"]["sessions"]["Row"];
type Question = Database["public"]["Tables"]["questions"]["Row"];
type Integration = Database["public"]["Tables"]["integrations"]["Row"];
type Automation = Database["public"]["Tables"]["automations"]["Row"];
type AutomationRun = Database["public"]["Tables"]["automation_runs"]["Row"];
type ComprehensiveDashboard = Dashboard & {
    datasources: DataSource[];
    widgets: Widget[];
};
type Log = Database["public"]["Tables"]["logs"]["Row"];

declare class OnvoTeams extends OnvoBase {
    list(): Promise<{
        created_at: string | null;
        email: string | null;
        id: string;
        logo: string | null;
        name: string | null;
        phone_number: string | null;
        stripe_id: string | null;
    }[]>;
    get(id: string): Promise<{
        created_at: string | null;
        email: string | null;
        id: string;
        logo: string | null;
        name: string | null;
        phone_number: string | null;
        stripe_id: string | null;
    }>;
    update(id: string, body: Partial<Team>): Promise<{
        created_at: string | null;
        email: string | null;
        id: string;
        logo: string | null;
        name: string | null;
        phone_number: string | null;
        stripe_id: string | null;
    }>;
}

declare class OnvoEmbedUsers extends OnvoBase {
    list(): Promise<{
        created_at: string;
        email: string | null;
        id: string;
        last_updated_at: string;
        metadata: Json;
        name: string;
        team: string;
    }[]>;
    get(id: string): Promise<{
        created_at: string;
        email: string | null;
        id: string;
        last_updated_at: string;
        metadata: Json;
        name: string;
        team: string;
    }>;
    delete(id: string): Promise<{
        success: true;
    }>;
    upsert(userId: string, userData: {
        name: string;
        email: string;
        metadata: {
            [key: string]: any;
        };
    }): Promise<{
        created_at: string;
        email: string | null;
        id: string;
        last_updated_at: string;
        metadata: Json;
        name: string;
        team: string;
    }>;
}

declare class OnvoDatasources extends OnvoBase {
    list(): Promise<DataSource[]>;
    get(id: string): Promise<DataSource>;
    delete(id: string): Promise<{
        success: true;
    }>;
    update(id: string, body: Partial<DataSource>): Promise<DataSource>;
    create(body: Omit<DataSource, "id" | "created_at" | "created_by" | "last_updated_at" | "last_updated_by" | "sample_data" | "size" | "team">): Promise<DataSource>;
}

declare class OnvoAutomations extends OnvoBase {
    list(): Promise<{
        created_at: string;
        created_by: string;
        dashboard: string;
        description: string | null;
        email_format: string;
        email_subject: string;
        enabled: boolean;
        id: string;
        last_run_at: string | null;
        last_updated_at: string;
        last_updated_by: string | null;
        next_run_at: string | null;
        output_format: string;
        recipient_type: string;
        recipients: string[] | null;
        schedule: string;
        team: string;
        timezone: string;
        title: string;
    }[]>;
    get(id: string): Promise<{
        created_at: string;
        created_by: string;
        dashboard: string;
        description: string | null;
        email_format: string;
        email_subject: string;
        enabled: boolean;
        id: string;
        last_run_at: string | null;
        last_updated_at: string;
        last_updated_by: string | null;
        next_run_at: string | null;
        output_format: string;
        recipient_type: string;
        recipients: string[] | null;
        schedule: string;
        team: string;
        timezone: string;
        title: string;
    }>;
    delete(id: string): Promise<{
        success: true;
    }>;
    update(id: string, body: Partial<Automation>): Promise<{
        created_at: string;
        created_by: string;
        dashboard: string;
        description: string | null;
        email_format: string;
        email_subject: string;
        enabled: boolean;
        id: string;
        last_run_at: string | null;
        last_updated_at: string;
        last_updated_by: string | null;
        next_run_at: string | null;
        output_format: string;
        recipient_type: string;
        recipients: string[] | null;
        schedule: string;
        team: string;
        timezone: string;
        title: string;
    }>;
    create(body: Partial<Automation>): Promise<{
        created_at: string;
        created_by: string;
        dashboard: string;
        description: string | null;
        email_format: string;
        email_subject: string;
        enabled: boolean;
        id: string;
        last_run_at: string | null;
        last_updated_at: string;
        last_updated_by: string | null;
        next_run_at: string | null;
        output_format: string;
        recipient_type: string;
        recipients: string[] | null;
        schedule: string;
        team: string;
        timezone: string;
        title: string;
    }>;
}

declare class OnvoDashboards extends OnvoBase {
    list(): Promise<Dashboard[]>;
    get(id: string): Promise<Dashboard>;
    delete(id: string): Promise<{
        success: true;
    }>;
    update(id: string, body: Partial<Dashboard>): Promise<Dashboard>;
    create(body: Omit<Dashboard, "id" | "created_at" | "created_by" | "last_updated_at" | "last_updated_by" | "thumbnail" | "team">): Promise<Dashboard>;
}

declare class OnvoDashboardDatasources extends OnvoBase {
    #private;
    constructor(dashboardId: string, apiKey: string, options?: {
        endpoint: string;
    });
    list(): Promise<{
        dashboard: string;
        datasource: string;
        team: string;
    }[]>;
    unlink(datasourceId: string): Promise<{
        success: true;
    }>;
    link(datasourceId: string): Promise<{
        dashboard: string;
        datasource: string;
        team: string;
    }>;
}

declare class OnvoDashboard extends OnvoBase {
    #private;
    datasources: OnvoDashboardDatasources;
    constructor(id: string, apiKey: string, options?: {
        endpoint: string;
    });
    updateWidgetCache(): Promise<{
        cache: string | null;
        code: string;
        created_at: string;
        dashboard: string;
        h: number | null;
        id: string;
        messages: Json;
        settings: Json;
        team: string;
        title: string;
        w: number | null;
        x: number | null;
        y: number | null;
    }[]>;
    getWidgetSuggestions(): Promise<string[]>;
    export(format: "csv" | "xlsx" | "pdf" | "png"): Promise<any>;
}

declare class OnvoEmbedUser extends OnvoBase {
    #private;
    constructor(id: string, apiKey: string, options?: {
        endpoint: string;
    });
    getAccessToken(): Promise<{
        user: string;
        token: string;
    }>;
}

declare class OnvoDatasource extends OnvoBase {
    #private;
    constructor(id: string, apiKey: string, options?: {
        endpoint: string;
    });
    initialize(): Promise<DataSource>;
    uploadFile(file: File): Promise<DataSource>;
}

declare class OnvoQuestions extends OnvoBase {
    list(filters: {
        dashboard: string;
    }): Promise<{
        account: string | null;
        created_at: string;
        dashboard: string;
        embed_user: string | null;
        id: string;
        messages: Json;
        query: string;
        team: string | null;
    }[]>;
    create(payload: {
        messages: {
            role: "user" | "assistant";
            content: string;
        }[];
        dashboardId: string;
        questionId?: string;
    }): Promise<{
        account: string | null;
        created_at: string;
        dashboard: string;
        embed_user: string | null;
        id: string;
        messages: Json;
        query: string;
        team: string | null;
    }>;
    delete(id: string): Promise<{
        success: true;
    }>;
    update(id: string, body: Partial<Question>): Promise<{
        account: string | null;
        created_at: string;
        dashboard: string;
        embed_user: string | null;
        id: string;
        messages: Json;
        query: string;
        team: string | null;
    }>;
}

declare class OnvoAutomation extends OnvoBase {
    #private;
    constructor(id: string, apiKey: string, options?: {
        endpoint: string;
    });
    getRuns(): Promise<{
        automation: string;
        id: string;
        recipient_emails: string[] | null;
        run_at: string;
        status: string;
        team: string;
    }[]>;
}

declare class OnvoWidget extends OnvoBase {
    #private;
    constructor(id: string, apiKey: string, options?: {
        endpoint: string;
    });
    export(format: "svg" | "csv" | "xlsx" | "png"): Promise<any>;
    updatePrompts(messages: {
        role: "user" | "assistant";
        content: String;
    }[]): Promise<{
        cache: string | null;
        code: string;
        created_at: string;
        dashboard: string;
        h: number | null;
        id: string;
        messages: Json;
        settings: Json;
        team: string;
        title: string;
        w: number | null;
        x: number | null;
        y: number | null;
    }>;
    executeCode(code: string): Promise<any>;
}

declare class OnvoSessions extends OnvoBase {
    list(filters: {
        parent_dashboard: string;
    }): Promise<{
        created_at: string;
        dashboard: string;
        embed_user: string;
        parameters: string;
        team: string;
    }[]>;
    get(filters: {
        dashboard: string;
    }): Promise<{
        created_at: string;
        dashboard: string;
        embed_user: string;
        parameters: string;
        team: string;
    }>;
    revoke(filters: {
        dashboard: string;
    }): Promise<{
        success: true;
    }>;
    revokeAll(filters: {
        parent_dashboard: string;
    }): Promise<{
        success: true;
    }>;
    upsert({ embed_user, parent_dashboard, parameters, }: {
        embed_user: string;
        parent_dashboard: string;
        parameters?: {
            [key: string]: any;
        };
    }): Promise<{
        created_at: string;
        dashboard: string;
        embed_user: string;
        parameters: string;
        team: string;
    } & {
        url: string;
        token: string;
    }>;
}

declare class OnvoWidgets extends OnvoBase {
    list(filters: {
        dashboard: string;
    }): Promise<{
        cache: string | null;
        code: string;
        created_at: string;
        dashboard: string;
        h: number | null;
        id: string;
        messages: Json;
        settings: Json;
        team: string;
        title: string;
        w: number | null;
        x: number | null;
        y: number | null;
    }[]>;
    get(id: string): Promise<{
        cache: string | null;
        code: string;
        created_at: string;
        dashboard: string;
        h: number | null;
        id: string;
        messages: Json;
        settings: Json;
        team: string;
        title: string;
        w: number | null;
        x: number | null;
        y: number | null;
    }>;
    delete(id: string): Promise<{
        success: true;
    }>;
    update(id: string, body: Partial<Widget>): Promise<{
        cache: string | null;
        code: string;
        created_at: string;
        dashboard: string;
        h: number | null;
        id: string;
        messages: Json;
        settings: Json;
        team: string;
        title: string;
        w: number | null;
        x: number | null;
        y: number | null;
    }>;
    create(body: Omit<Widget, "id" | "created_at">): Promise<{
        cache: string | null;
        code: string;
        created_at: string;
        dashboard: string;
        h: number | null;
        id: string;
        messages: Json;
        settings: Json;
        team: string;
        title: string;
        w: number | null;
        x: number | null;
        y: number | null;
    }>;
}

declare class Onvo extends OnvoBase {
    accounts: OnvoAccounts;
    teams: OnvoTeams;
    embed_users: OnvoEmbedUsers;
    datasources: OnvoDatasources;
    automations: OnvoAutomations;
    dashboards: OnvoDashboards;
    questions: OnvoQuestions;
    widgets: OnvoWidgets;
    sessions: OnvoSessions;
    automation: (automationId: string) => OnvoAutomation;
    dashboard: (dashboardId: string) => OnvoDashboard;
    embed_user: (embedUserId: string) => OnvoEmbedUser;
    datasource: (datasourceId: string) => OnvoDatasource;
    widget: (widgetId: string) => OnvoWidget;
    constructor(apiKey: string, options?: {
        endpoint: string;
    });
}

export { type APIDatasourceConfig, type APIKey, type Account, type AirtableDatasourceConfig, type Automation, type AutomationRun, type ComprehensiveDashboard, type Dashboard, type DashboardDatasource, type DataSource, type Database, type EmbedUser, type Enums, type FileDatasourceConfig, type FirestoreDatasourceConfig, type GoogleSheetDatasourceConfig, type Integration, type Invite, type Json, type Log, type Member, type Modify, type MongoDBDatasourceConfig, type OauthConfig, Onvo, type PostgreSQLDatasourceConfig, type Question, type RedshiftDatasourceConfig, type RootfiDatasourceConfig, type SQLDatasourceConfig, type Session, type Settings, type Subscription, type SubscriptionPlan, Table, type Tables, type TablesInsert, type TablesUpdate, type Team, type Widget, type ZohoDatasourceConfig, Onvo as default };
