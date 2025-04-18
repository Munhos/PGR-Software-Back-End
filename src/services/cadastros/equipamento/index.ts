import { CadastroEquipamento } from "../../../models/Equipamentos";

const formatarNome = (nome: string) => {
  if (!nome) return "";
  const palavras = nome.toLowerCase().split(" ");
  palavras[0] = palavras[0].charAt(0).toUpperCase() + palavras[0].slice(1);
  return palavras.join(" ");
};

export const equipamentoPostService = async (
  empresaId: string,
  descricao: string
) => {
  const descricaoFormatada = formatarNome(descricao);

  const data = await CadastroEquipamento.create({
    empresa_id: Number(empresaId),
    descricao: descricaoFormatada,
  });

  return data;
};

export const equipamentoGetAllService = async (empresaId: string) => {
  const data = await CadastroEquipamento.findAll({
    where: {
      empresa_id: Number(empresaId),
    },
  });

  return data;
};

export const equipamentoGetService = async (
  empresaId: string,
  equipamentoId: string
) => {
  const data = await CadastroEquipamento.findOne({
    where: {
      empresa_id: Number(empresaId),
      id: equipamentoId,
    },
  });

  return data;
};

export const equipamentoDeleteService = (
  empresaId: string,
  equipamentoId: string
) => {
  const data = CadastroEquipamento.destroy({
    where: {
      empresa_id: Number(empresaId),
      id: equipamentoId,
    },
  });

  return data;
};

export const equipamentoPutService = (
  empresaId: string,
  descricao: string,
  equipamentoId: string
) => {
  const descricaoFormatada = formatarNome(descricao);

  const data = CadastroEquipamento.update(
    {
      descricao: descricaoFormatada,
    },
    {
      where: {
        empresa_id: Number(empresaId),
        id: equipamentoId,
      },
    }
  );

  return data;
};
